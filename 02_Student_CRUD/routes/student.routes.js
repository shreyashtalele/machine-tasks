const express = require('express')
const router = express.Router()
const { getAllStudnets, getStudentById, createStudentController, updateStudentController, deleteStudentController } = require('../controllers/student.controller.js')

router.get('/', getAllStudnets)

router.get('/:id', getStudentById)
router.post('/', createStudentController)
router.put('/:id', updateStudentController)
router.delete('/:id', deleteStudentController)

module.exports = router