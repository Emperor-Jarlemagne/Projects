
const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://Jari:${password}@notesapp.31v5zl5.mongodb.net/testing?retryWrites=true&w=majority`

mongoose.set('StrictQuery', false)
mongoose.connect(url, { useNewUrlParser: true})

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
