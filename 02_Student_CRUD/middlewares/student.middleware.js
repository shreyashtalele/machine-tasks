function validateStudentId(req, res, next) {
    const studentId = Number(req.params.id)
    if (isNaN(studentId) || studentId <= 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid student ID",
        })
    }
    req.studentId = studentId;
    next();

}

function errorHandler(error, req, res, next) {
    if (error.message === 'Student not found') {
        return res.status(404).json({
            success: false,
            message: error.message
        })
    }
    if (error.message.includes("required")) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}
module.exports = {
    validateStudentId,
    errorHandler
}