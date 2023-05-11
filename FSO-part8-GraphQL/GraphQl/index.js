const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { WebSocketServer } = require('ws')
const { useServer } = require('graphql-ws/lib/use/ws')
const express = require('express')
const cors = require('cors')
const http = require('http')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const User = require('./models/users')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

mongoose.set('debug', true)

const start = async () => {
  const app = express()
  const httpServer = http.createServer(app)

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/',
  })

  const schema = makeExecutableSchema({ typeDefs, resolvers })
  const serverCleanup = useServer({ schema }, wsServer)

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  })

  await server.start()

  app.use(
    '/',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const auth = req ? req.headers.authorization : null
        if (auth && auth.startsWith('Bearer ')) {
          const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET)
          const currentUser = await User.findById(decodedToken.id).populate(
            'friends'
          )
          return { currentUser }
        }
      },
    }),
  )

  const PORT = 4000

  httpServer.listen(PORT, () =>
    console.log(`Server is now running on http://localhost:${PORT}`)
  )
}

start()

// let persons = [
//     {
//       name: "Arto Hellas",
//       phone: "040-123543",
//       street: "Tapiolankatu 5 A",
//       city: "Espoo",
//       id: "3d594650-3436-11e9-bc57-8b80ba54c431"
//     },
//     {
//       name: "Matti Luukkainen",
//       phone: "040-432342",
//       street: "Malminkaari 10 A",
//       city: "Helsinki",
//       id: '3d599470-3436-11e9-bc57-8b80ba54c431'
//     },
//     {
//       name: "Venla Ruuska",
//       street: "Nallemäentie 22 C",
//       city: "Helsinki",
//       id: '3d599471-3436-11e9-bc57-8b80ba54c431'
//     },
//   ]

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  // })

  // startStandaloneServer(server, {
  //   listen: { port: 4000 },
  //   context: async ({ req, res }) => {
  //     const auth = req ? req.headers.authorization : null
  //     if (auth && auth.startsWith('Bearer')) {
  //       const decodedToken = jwt.verify(
  //         auth.substring(7), process.env.JWT_SECRET
  //       )
  //       const currentUser = await User
  //         .findById(decodedToken.id).populate('friends')
  //         return { currentUser }
  //     }
  //   },
  // }).then(( {url }) => {
  //   console.log(`server ready at ${url}`)
  // })