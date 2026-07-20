require("dotenv").config();
const express = require('express')
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT
const app = require('./app')
const connectDB = require('./config/db');


connectDB(MONGO_URL).then(
    () => {
        console.log(" Server :: Database Connected ");
        app.listen(PORT, () => {
            console.log("Server :: Server Running on PORT :", PORT);

        })
    }
).catch((error) => {
    console.error("Database Conection Failed ", error.message);

})

