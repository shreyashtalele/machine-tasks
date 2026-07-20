
const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "age",
    "department",
    "designation",
    "salary"
]
const validateCreateEmployee = (employeeData) => {
    for (let field of requiredFields) {
        if (employeeData[field] === undefined || employeeData[field] === null || (typeof employeeData[field] === "string" &&
            employeeData[field].trim() === "")) {
            return {
                success: false,
                message: `${field} is required`
            }
        }
    }

    return {
        success: true,
        message: `employee details are valid `
    }
}

module.exports = {
    validateCreateEmployee,
}