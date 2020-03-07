require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const casesRouter = require('./cases/cases-router')
const contactsRouter = require('./contacts/contacts-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send('This works right now!')
})

app.use('/api/users', usersRouter)
app.use('/api/cases', casesRouter)
app.use('/api/auth', authRouter)
app.use('/api/contacts', contactsRouter)

app.use(function errorHandler(error, req, res, next) {
  let response
  if (NODE_ENV === 'production') {
    response = { error: { message: error } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
})

module.exports = app