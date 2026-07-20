const express = require('express');
const { createEmployeeController, getEmployeesController, getEmployeeByIdController } = require('../controllers/employee.controller')
const employeeRouter = express.Router()


employeeRouter.post('/', createEmployeeController)
employeeRouter.get('/', getEmployeesController)
employeeRouter.get('/:id', getEmployeeByIdController)

module.exports = employeeRouter