const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('Connecting...')

// conección a la base de datos
mongoose.connect(config.MONGO_URI)
  .then("Connected...")
  .catch((error) => {
    logger.error('error at connecting', error.message)
  })

app.use(cors())
// app.use(express.static('build')) <-- para cuando agreguemos el front
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter) // <-- Enrutador de blogs 

app.use(middleware.unknownEndpoint) // <-- Manejo de ruta desconocida
app.use(middleware.errorHandler)   // <-- Manejo de errores


module.exports = app