const express = require('express')
const app = express()
const userRouter = require('../02_Student_CRUD/routes/student.routes.js')
const { errorHandler } = require('./middlewares/student.middleware.js')
const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/student', userRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`App::server started on port ${PORT}`);
})