const { json } = require('body-parser')
const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, '../data/data.json')
const todos_string = fs.readFileSync(filepath, 'utf-8')
const todos = JSON.parse(todos_string)
function getAllTodos(req, res) {
    res.json(todos)
}

function getTodoByID(req, res) {
    const id = Number(req.params.id)
    const todo = todos.find((todo) => (todo.id === id));
    if (todo) {
        return res.json(todo)
    }
    return res.status(404).json({ msg: "not found" })
}

function createTodo(req, res) {
    const max_id = todos.length ? Math.max(...todos.map((todo) => todo.id)) : 1
    const id = max_id + 1
    const { name, status } = req.body
    const allowedStatus = ["pending", "completed"];

    if (!name || !status) {
        return res.status(400).json({
            message: "name and status are required "
        })
    }

    if (!allowedStatus.includes(status)) {
        return res.status(400).json({
            message: "status should either pending or completed"
        })
    }

    const todo = {
        id: id,
        name: name,
        status: status
    }

    todos.push(todo)

    fs.writeFileSync(filepath, JSON.stringify(todos, null, 2))

    res.status(201).json({
        message: "Todo created successfully",
        id: id
    })
}


function updateTodo(req, res) {
    const id = Number(req.params.id)
    const { name, status } = req.body
    const index = todos.findIndex((todo) => todo.id === id)

    if (index === -1) {
        return res.json({ message: " ID not found " })
    }
    todos[index] = {
        id, name, status
    }

    fs.writeFileSync(filepath, JSON.stringify(todos, null, 2))

    res.status(200).json({
        message: "todo updated successfully",
        data: todos[index]
    })
}

function deleteTodo(req, res) {
    const id = Number(req.params.id)
    const index = todos.findIndex((todo) => (todo.id === id))
    if (index === -1) {
        return res.json({
            message: "Todo Id not found"
        })
    }
    todos.splice(index, 1)

    fs.writeFileSync(filepath, JSON.stringify(todos, null, 2))
    return res.status(204).json({
        message: "Todo Deleted Successfully "
    })
}
module.exports = {
    getAllTodos,
    getTodoByID,
    createTodo,
    updateTodo,
    deleteTodo,
}