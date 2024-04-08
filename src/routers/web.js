const express = require('express')
const router = express.Router()
const homeController = require('../controller/homeController')

router.get('/',  homeController.getHomePage)
router.get('/create', homeController.getCreatePage)
router.get('/detail/user/:id', homeController.getDetailPage)
router.post('/create-user', homeController.postCreateUser)
router.post('/delete', homeController.deleteUser)
router.get('/delete/user/:id', homeController.getDeletePage)
router.get('/update/user/:id', homeController.getUpdatePage)
router.post('/update', homeController.updateUser)

module.exports = router