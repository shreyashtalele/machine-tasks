const express = require('express')
const router = express.Router()
const { getAllStudnets } = require('./controllers/student.controller.js')

router.get('/', getAllStudnets)