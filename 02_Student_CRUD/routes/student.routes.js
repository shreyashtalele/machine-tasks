const express = require('express')
const router = express.Router()
const { getAllStudnets, getStudentById, createStudent } = require('../controllers/student.controller.js')

router.get('/', getAllStudnets)

router.get('/:id', getStudentById)
router.post('/', createStudent)

module.exports = router