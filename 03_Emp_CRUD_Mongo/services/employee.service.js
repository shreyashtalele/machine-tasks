const { validateCreateEmployee } = require('../utils/employee.validate')
const { Employee } = require('../models/employee.model')
const createEmployee = async (employeeData) => {
    const validation = validateCreateEmployee(employeeData)
    if (!validation.success) {
        throw new Error(validation.message)
    }

    const employee = await Employee.create(employeeData)
    return employee

}


const getEmployees = async () => {
    const employees = await Employee.find()
    return employees
}

const getEmployeeByID = async (id) => {
    const employee = await Employee.findById(id)
    if (!employee) {
        throw new Error("Employee not found")
    }
    return employee
}
module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeByID,

}