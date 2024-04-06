const express = require('express')
const router = express.Router()
const getHomePage = require('../controller/homeController')

router.get('/',  getHomePage)

module.exports = router