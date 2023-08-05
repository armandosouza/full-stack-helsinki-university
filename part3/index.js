const express = require("express")
const app = express()

const notes = require('./notes')

//get all persons
app.get('/api/persons', (request, response) => {
	response.json(notes)
})

//get info about persons
app.get('/info', (request, response) => {
	const numPersons = notes.length
	const date = new Date()
	response.send(`
		<p>Phonebook has info for ${numPersons} people</p>
		<p>${date}</p>
	`)
})

//get unique person
app.get('/api/persons/:id', (request, response) => {
	const id = parseInt(request.params.id)
	console.log(`Id da nota: ${id}`)
	const note = notes.find(note => note.id === id)
	console.log(note)
	if(!note) {
		return response.status(404).end()
	}
	response.json(note)
})

//delete unique person
app.delete('/api/persons/:id', (request, response) => {
	const id = parseInt(request.params.id)
	notes = notes.filter(note => note.id !== id)
	response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Servidor rodando em: http://localhost:${3001}`)
})