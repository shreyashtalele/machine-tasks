const express = require('express')
const router = express.Router()
const { getAllTodos, getTodoByID, createTodo, updateTodo, deleteTodo } = require('../controllers/todoControllers')

router.get('/', getAllTodos)

router.get('/:id', getTodoByID)

router.post('/', createTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)
module.exports = router