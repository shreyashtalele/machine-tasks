const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "age",
    "gender",
    "course",
    "city"
];
function validateCreateStudent(student) {
    for (let field of requiredFields) {
        if (student[field] === undefined || student[field] === null || student[field] === "") {
            return {
                success: false,
                message: `${field} is required`
            };
        }
    }

    return {
        success: true,
        message: " student data is valid "
    }
}


module.exports = {
    validateCreateStudent,
}



