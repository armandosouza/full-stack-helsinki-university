require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

const Person = require("./models/person")

morgan.token('content', function (request, response) { return JSON.stringify(request.body) })

//middlewares
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :http-version - :response-time ms :content'))
app.use(cors())

//get all persons
app.get('/api/persons', (request, response) => {
	Person.find({}).then(people => {
		response.json(people)
	})
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
	const note = notes.find(note => note.id === id)
	if(!note) {
		return response.status(404).end()
	}
	response.json(note)
})

//add a new person
app.post('/api/persons', (request, response) => {
	const person = request.body

	if(!person.name || !person.number) {
		return response.status(400).json({
			error: "Name and/or number are required!"
		})
	}

	const newPerson = new Person({
		name: person.name,
		number: person.number,
	})

	newPerson.save().then(savedPerson => {
		response.json(savedPerson)
	})
})

//delete unique person
app.delete('/api/persons/:id', (request, response) => {
	const id = parseInt(request.params.id)
	notes = notes.filter(note => note.id !== id)
	response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Servidor rodando em: http://localhost:${3001}`)
})