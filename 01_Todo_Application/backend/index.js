const express = require('express')
const cors = require("cors");
const todoRouter = require('./routes/todoRoutes')
const app = express()


const PORT = 8000

app.use(cors())
app.use(express.json())

app.use('/todos', todoRouter)

app.listen(PORT, () => {
    console.log('server started at port ', PORT);
})