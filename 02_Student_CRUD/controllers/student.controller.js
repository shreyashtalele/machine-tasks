
const { getStudents,
    findStudentById,
    addStudent,
    updateStudent,
    deleteStudent } = require('../services/student.services')
async function getAllStudnetsController(req, res, next) {
    try {
        const studentData = await getStudents()
        return res
            .status(200)
            .json({
                success: true,
                message: "data fetched sucessfully",
                data: studentData
            })
    }
    catch (error) {
        next(error)
    }
}


async function getStudentByIdController(req, res, next) {
    const studentId = Number(req.studentId)

    try {
        const student = await findStudentById(studentId)
        if (!student) {
            throw new Error("Student not found")
        }

        return res.status(200).json({
            success: true,
            message: "Student found successfully",
            data: student
        })

    } catch (error) {
        next(error)
    }
}


async function createStudentController(req, res, next) {
    const studentData = req.body

    try {
        const student = await addStudent(studentData)
        return res.status(201).json(
            {
                success: true,
                message: "Student created successfully",
                data: student
            }
        )
    }
    catch (error) {
        next(error)
    }
}


async function updateStudentController(req, res, next) {
    const studentId = req.studentId
    const studentData = req.body

    try {
        const student = await updateStudent(studentId, studentData)

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        })
    } catch (error) {
        next(error)
    }
}


async function deleteStudentController(req, res, next) {
    const studentId = req.studentId
    try {
        const { success, message } = await deleteStudent(studentId)
        if (success) {
            return res.status(200).json({
                success,
                message
            })
        }
    } catch (error) {
        next(error)
    }
}
module.exports = {
    getAllStudnetsController,
    getStudentByIdController,
    createStudentController,
    updateStudentController,
    deleteStudentController,
}