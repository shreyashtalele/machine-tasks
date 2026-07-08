const fs = require('fs')
const path = require('path')

const File_Path = path.join(__dirname, 'model', 'student.json')
const student_data = JSON.parse(fs.readFileSync(File_Path, 'utf-8'))

function getAllStudnets(req, res) {
    return res
        .status(200)
        .json({
            sucess: true,
            message: "data fetched sucessfully",
            data: student_data
        })
}

module.exports = {
    getAllStudnets,
}