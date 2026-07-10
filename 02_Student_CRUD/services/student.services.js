const { promises: fs } = require('fs')
const path = require('path')
const { validateCreateStudent } = require('../utils/student.utils');


const filePath = path.join(__dirname, "..", "model", "student.json");



async function getStudents() {
    const data = await fs.readFile(filePath)
    return JSON.parse(data)
}


async function saveStudents(students) {
    await fs.writeFile(
        filePath,
        JSON.stringify(students, null, 2))
}

async function findStudentById(id) {
    const student_data = await getStudents()
    const student = student_data.find((student) => student.id === id)
    return student
}
async function addStudent(student) {
    const stude_data = await getStudents()

}

async function addStudent(studentData) {
    const { success, message } = validateCreateStudent(studentData)
    if (!success) {
        throw new Error(message)
    }

    const students = await getStudents()
    const newStudentData = {
        id: students.length + 1,
        ...studentData,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    students.push(newStudentData)
    await saveStudents(students)
    return newStudentData

}

async function updateStudent(studentId, studentData) {
    const students = await getStudents();

    const index = students.findIndex(
        student => student.id === studentId
    );

    if (index === -1) {
        throw new Error("Student not found");
    }

    const existingStudent = students[index];

    const updatedStudent = {
        ...existingStudent,
        ...studentData,
        id: existingStudent.id,
        createdAt: existingStudent.createdAt,
        updatedAt: new Date().toISOString()
    };

    students[index] = updatedStudent;

    await saveStudents(students);

    return updatedStudent;
}


async function deleteStudent(studentId) {

    const students = await getStudents();

    const index = students.findIndex(
        student => student.id === studentId
    );

    if (index === -1) {
        throw new Error("Student not found");
    }

    students.splice(index, 1)
    await fs.writeFile(filePath, JSON.stringify(students, null, 2))

    return {
        success: true,
        message: "student deleted successfully"
    }

}
module.exports = {
    getStudents,
    findStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
}