const express = require('express');
const { createEmployeeController,
    getEmployeesController,
    getEmployeeByIdController,
    updateEmployeeController,
    deleteEmployeeController,
    getEmployeeBySearchController,
    addBulkEmployeesController
    , getEmployeesWithPaginationController,
    getEmployeesWithSortController,
} = require('../controllers/employee.controller')
const employeeRouter = express.Router()


employeeRouter.post('/', createEmployeeController)
employeeRouter.get('/', getEmployeeBySearchController)
// employeeRouter.get('/', getEmployeesController)
employeeRouter.get('/pagination', getEmployeesWithPaginationController)
employeeRouter.get('/sort', getEmployeesWithSortController)
employeeRouter.get('/:id', getEmployeeByIdController)
employeeRouter.put('/:id', updateEmployeeController)
employeeRouter.delete('/:id', deleteEmployeeController)
employeeRouter.post('/bulk', addBulkEmployeesController)


module.exports = employeeRouter