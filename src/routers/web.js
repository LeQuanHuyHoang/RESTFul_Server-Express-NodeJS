const express = require('express')
const router = express.Router()
const homeController = require('../controller/homeController')
const utils = require('../utils/comon')
const multer = require("multer");


router.get('/',  homeController.getHomePage)
router.get('/create', homeController.getCreatePage)
router.get('/detail/user/:id', homeController.getDetailPage)
router.post('/create-user', homeController.postCreateUser)
router.post('/delete', homeController.deleteUser)
router.get('/delete/user/:id', homeController.getDeletePage)
router.get('/update/user/:id', homeController.getUpdatePage)
router.post('/update', homeController.updateUser)
router.get('/upload', homeController.getUploadFilePage)
router.post('/upload-profile-pic', utils.upload.single('profile-pic'),homeController.handleUploadFile)
router.post('/upload-multiple-pic', utils.errLimitFile,homeController.handleUploadMultipleFile)

module.exports = router