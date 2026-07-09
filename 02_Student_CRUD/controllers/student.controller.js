const e = require('express');
const fs = require('fs')
const path = require('path')
const { validateCreateStudent } = require('../utils/student.utils')
const filePath = path.join(__dirname, "..", "model", "student.json");
const student_data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

function getAllStudnets(req, res) {
    return res
        .status(200)
        .json({
            sucess: true,
            message: "data fetched sucessfully",
            data: student_data
        })
}


function getStudentById(req, res) {
    const studentId = Number(req.params.id)

    if (isNaN(studentId)) {
        return res.status(404).json({
            sucess: false,
            message: "Student Id must be the number",
        })
    }
    student_data.map((student) => {
        if (student.id === studentId) {

            return res.status(200).json({
                sucess: true,
                message: "Data Found",
                data: student
            })
        }
    })
}


function createStudent(req, res) {
    console.log(req.body);

    const studentData = req.body
    const { success, message } = validateCreateStudent(studentData)
    if (!success) {
        return res.status(400).json(
            {
                success: false,
                message
            }
        )
    }

    const newStudentData = {
        id: student_data.length + 1,
        ...studentData,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    try {
        student_data.push(newStudentData)
        fs.writeFileSync(filePath, JSON.stringify(student_data, null, 2))
        return res.status(201).json(
            {
                success: true,
                message: "Student Created Successfully",
                data: newStudentData
            }
        )
    }
    catch {

        return res.status(500).json(
            {
                success: false,
                message: "Internal Server Error"
            }
        )


    }
}

module.exports = {
    getAllStudnets,
    getStudentById,
    createStudent
}