const express = require('express')
const employeeRouter = require('./routes/employee.routes')
const errorHandler = require('./middlewares/error.middleware')
const app = express()
app.use(express.json())
app.use('/employees', employeeRouter)

app.use(errorHandler)

module.exports = app