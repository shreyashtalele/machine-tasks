const { createEmployee, getEmployees, getEmployeeByID } = require('../services/employee.service')
const createEmployeeController = async (req, res, next) => {
    const employeeData = req.body
    try {
        const employee = await createEmployee(employeeData)
        return res.status(201).json({
            success: true,
            message: `Employee craeted successfully`,
            data: employee
        })
    } catch (error) {
        next(error)
    }
}

const getEmployeesController = async (req, res, next) => {
    try {
        const employees = await getEmployees()
        return res
            .status(200)
            .json(
                {
                    success: true,
                    message: 'Employee data fetched successfully',
                    data: employees
                }
            )
    } catch (error) {
        next(error)
    }
}


const getEmployeeByIdController = async (req, res, next) => {
    const id = req.params.id
    try {
        const employee = await getEmployeeByID(id)
        return res
            .status(200)
            .json({
                success: true,
                data: employee,
                message: "Employee found successfully "
            })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createEmployeeController,
    getEmployeesController,
    getEmployeeByIdController,

}