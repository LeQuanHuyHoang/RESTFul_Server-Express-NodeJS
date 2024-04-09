const express = require('express')
const router = express.Router()
const APIController = require('../controller/APIController')

router.get('/users', APIController.getListUser)
router.post('/create-user', APIController.createUser)
router.put ('/update-user', APIController.updateUser)
router.delete('/delete-user', APIController.deleteUser)

module.exports = router