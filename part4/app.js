const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

const logger = require('./utils/logger')
const config = require('./utils/config')

const blogsRouter = require('./controllers/blogs')

mongoose.connect(config.MONGODB_URI)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/blogs', blogsRouter)

module.exports = app