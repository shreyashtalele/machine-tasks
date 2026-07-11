const express = require('express')
const router = express.Router()
const { getAllStudnetsController, getStudentByIdController, createStudentController, updateStudentController, deleteStudentController } = require('../controllers/student.controller.js')
const { validateStudentId, errorHandler } = require('../middlewares/student.middleware.js')
router.get('/', getAllStudnetsController)

router.get('/:id', validateStudentId, getStudentByIdController)
router.post('/', createStudentController)
router.put('/:id', validateStudentId, updateStudentController)
router.delete('/:id', validateStudentId, deleteStudentController)

module.exports = router