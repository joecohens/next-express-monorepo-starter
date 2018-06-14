// Packages
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Ours
const prefix = require('./middlewares/prefix')
const error404Handler = require('./middlewares/404')
const errorHandler = require('./middlewares/errors')

const index = require('./controllers/index')

const app = express();

app.use(prefix('api'))
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
})

// Catch 404 and forward to error handler
app.use(error404Handler)

// Error handler
app.use(errorHandler)

module.exports = app;
