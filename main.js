const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const main = express()

main.use(bodyParser.urlencoded({extended: true})); 
main.use(bodyParser.json());   
main.use('/', authRoutes)

module.exports = main

