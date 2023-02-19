
const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://Jari:${password}@notesapp.31v5zl5.mongodb.net/testing?retryWrites=true&w=majority`

mongoose.set('StrictQuery', false)
mongoose.connect(url, { useNewUrlParser: true})
    /* .then((result) => {
        console.log('connected')

    Note.find({important:true}).then(result => {
        result.forEach(note => {
            console.log(note)
        })
        mongoose.connection.close()
    }) */
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
        content: "Promise auttaa asynkronisissa operraatiossa",
        date: new Date(),
        important: true,
}) 

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})


/*
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close
})

 noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
    }
}) 

    return note.save() 
    })
    .then(() => {
        console.log('note saved!')
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))   */