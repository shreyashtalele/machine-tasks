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

const updateEmployee = async (id, employeeData) => {
    const employee = await Employee.findById(id)
    if (!employee) {
        throw new Error("Employee not found")
    }
    Object.assign(employee, employeeData)
    const updateEmployee = await employee.save()
    return updateEmployee
}

const deleteEmployee = async (id) => {

    const deletedEmployee = await Employee.findByIdAndDelete(id)
    if (!deletedEmployee) {
        throw new Error("Employee not found")
    }
    return deletedEmployee
}

const getEmployeeBySearch = async (search) => {
    const searchedEmployees = await Employee.find({
        $or: [
            {
                "firstName": {
                    $regex: search,
                    $options: 'i'
                }
            },
            {
                "lastName": {
                    $regex: search,
                    $options: 'i'
                }
            },
            {
                "email": {
                    $regex: search,
                    $options: 'i'
                }
            }
        ]
    })
    return searchedEmployees
}

const addBulkEmployees = async (employees) => {
    if (!Array.isArray(employees)) {
        throw new Error("Employees data should be an array");
    }
    if (employees.length === 0) {
        throw new Error("Employees list cannot be empty");
    }

    const errors = []
    const validEmployees = []
    let insertedEmployees = []
    for (const [index, employee] of employees.entries()) {
        const validation = validateCreateEmployee(employee)
        if (!validation.success) {
            errors.push({
                row: index + 1,
                message: validation.message,
                email: employee.email
            })
            continue;
        }
        const existingEmployee = await Employee.findOne({
            email: employee.email
        })
        if (existingEmployee) {

            errors.push({
                row: index + 1,
                email: employee.email,
                message: "Email already exists"
            });

            continue;
        }
        validEmployees.push(employee)
    }

    if (validEmployees.length > 0) {
        insertedEmployees = await Employee.insertMany(validEmployees)
    }
    return {
        insertedEmployees,
        errors,
        totalInserted: insertedEmployees.length,
        totalFailed: errors.length
    }
}
module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeByID,
    updateEmployee,
    deleteEmployee,
    getEmployeeBySearch,
    addBulkEmployees,
}