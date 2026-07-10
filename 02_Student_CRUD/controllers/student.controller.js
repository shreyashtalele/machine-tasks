const e = require('express');
const fs = require('fs')
const path = require('path')

const { json } = require('stream/consumers');
const filePath = path.join(__dirname, "..", "model", "student.json");
const { getStudents, findStudentById, addStudent, updateStudent, deleteStudent } = require('../services/student.services')


async function getAllStudnets(req, res) {
    try {
        const student_data = await getStudents()
        return res
            .status(200)
            .json({
                sucess: true,
                message: "data fetched sucessfully",
                data: student_data
            })
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        })
    }
}


async function getStudentById(req, res) {
    const studentId = Number(req.params.id)

    if (isNaN(studentId)) {
        return res.status(400).json({
            success: false,
            message: "Student Id must be the number",
        })
    }

    try {
        const student = await findStudentById(studentId)
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "student not found "
            }
            )
        }
        else {
            return res.status(200).json({
                success: true,
                message: "student found successfully",
                data: student
            })
        }
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Internal Server Error"
            }
        )
    }
}


async function createStudentController(req, res) {
    const studentData = req.body

    try {
        const student = await addStudent(studentData)
        return res.status(201).json(
            {
                success: true,
                message: 'student created successfully ',
                data: student
            }
        )
    }
    catch (error) {

        if (error.message.includes("required")) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}


async function updateStudentController(req, res) {
    const studentId = Number(req.params.id)
    const studentData = req.body

    if (isNaN(studentId)) {
        return res.status(400).json({

            success: false,
            message: "please provide a Valid id"

        })
    }

    try {
        const student = await updateStudent(studentId, studentData)

        return res.status(200).json({
            success: true,
            message: "Student updated sucessfully ",
            data: student
        })
    } catch (error) {
        if (error.message === "Student not found") {
            return res.status(404).json({
                success: false,
                message: "student not found"
            })
        }

        return res.status(500).json(
            {
                success: false,
                message: "Internal Server error "
            }
        )
    }
}


async function deleteStudentController(req, res) {
    const studentId = Number(req.params.id)
    if (isNaN(studentId)) {
        return res.status(400).json({
            success: false,
            message: "provide valid student ID "
        })
    }

    try {
        const { success, message } = await deleteStudent(studentId)
        if (success) {
            return res.status(200).json({
                success,
                message
            })
        }

    } catch (error) {
        if (error.message === 'Student not found') {
            return res.status(404).json({
                success: false,
                message: "student not found"
            })
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })

    }
}
module.exports = {
    getAllStudnets,
    getStudentById,
    createStudentController,
    updateStudentController,
    deleteStudentController,
}