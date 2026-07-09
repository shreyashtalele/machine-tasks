const express = require('express')
const app = express()
const userRouter = require('../02_Student_CRUD/routes/student.routes.js')
const PORT = 8000

app.use(express.urlencoded())
app.use(express.json())
app.use('/student', userRouter)

app.listen(8000, (error) => {
    if (!error) {
        console.log(`App::server started on port ${PORT}`);

    }
    else {
        console.log(`App :: Error while starting server ${PORT}`);

    }
})