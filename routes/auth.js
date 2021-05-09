const express = require("express")
const controler = require("../controlers/getResult")
const router = express.Router()

router.post('/register', controler.register)
router.get('/find', controler.find)

module.exports = router