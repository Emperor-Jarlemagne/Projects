
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Note = require('../models/note')

test('there are two notes', async () => {
    const response = await api.get('/api/notes')
    // execution gets here only after the HTTP request is complete
    // the result of HTTP request is saved in variable response
    expect(response.body.toHaveLength(2))
})

test('the first note is about HTTP methods', async () => {
    const response = await api.get('/api/notes')
    expect(response.body[0].content).toBe('HTML is easy')
})

test('notes are returned as json', async () => {
    await api
        .get('/api/notes')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 10000)

afterAll(async () => {
    await mongoose.connection.close()
})