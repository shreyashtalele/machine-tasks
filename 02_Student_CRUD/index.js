const express = require('express')
const app = express()
const userRouter = require('./routes/student.routes')
const PORT = 8000




app.use('/student', userRouter)

app.listen(8000, (error) => {
    if (!error) {
        console.log(`App::server started on port ${PORT}`);

    }
    else {
        console.log(`App :: Error while starting server ${PORT}`);

    }
})