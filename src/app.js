const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/router')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)


module.exports = app