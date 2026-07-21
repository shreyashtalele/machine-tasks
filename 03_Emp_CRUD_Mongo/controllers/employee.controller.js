const { createEmployee,
    getEmployees,
    getEmployeeByID,
    updateEmployee,
    deleteEmployee,
    getEmployeeBySearch,
    addBulkEmployees } = require('../services/employee.service')
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
                message: "Employee found successfully"
            })
    } catch (error) {
        next(error)
    }
}
const updateEmployeeController = async (req, res, next) => {
    const id = req.params.id
    const body = req.body
    try {
        const updatedEmployee = await updateEmployee(id, body)
        res.status(200).json(
            {
                success: true,
                data: updatedEmployee,
                message: "Employee updated successfully"
            }
        )
    } catch (error) {
        next(error)
    }
}

const deleteEmployeeController = async (req, res, next) => {
    const id = req.params.id
    try {
        const deletedEmployee = await deleteEmployee(id)
        return res.status(200)
            .json({
                success: true,
                data: deletedEmployee,
                message: "Employee delete successfully"
            })
    } catch (error) {
        next(error)
    }
}

const getEmployeeBySearchController = async (req, res, next) => {
    const search = req.query.search
    try {
        let employee;
        if (search) {
            employee = await getEmployeeBySearch(search)
        }
        else {
            employee = await getEmployees()
        }
        return res.status(200)
            .json({
                success: true,
                data: employee,
                message: "Employee with match found"
            })
    } catch (error) {
        next(error)
    }
}

const addBulkEmployeesController = async (req, res, next) => {
    const employees = req.body
    try {
        const createdEmployees = await addBulkEmployees(employees)
        return res.status(201).json({
            success: true,
            message: "Bulk employee creation completed",
            inserted: createdEmployees.totalInserted,
            failed: createdEmployees.totalFailed,
            data: createdEmployees
        });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createEmployeeController,
    getEmployeesController,
    getEmployeeByIdController,
    updateEmployeeController,
    deleteEmployeeController,
    getEmployeeBySearchController,
    addBulkEmployeesController

}