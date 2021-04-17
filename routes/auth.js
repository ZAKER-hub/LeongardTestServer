const express = require("express")
const controler = require("../controlers/auth")
const router = express.Router()

router.post('/login', controler.login)
router.post('/register', controler.register)


module.exports = router