const CRUDSer = require('../services/CRUDService')
const multer = require('multer')
const utils = require("../utils/comon");

const getHomePage = async (req, res) => {
    let result = await CRUDSer.getListUser()
    return res.render('index.ejs', {listUser:result})
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getDetailPage = async (req, res) => {
    let userId = req.params.id
    let result = await CRUDSer.getUserById(userId)
    return res.render('detail.ejs',{userDetail:result})
}

const postCreateUser = async (req,res) => {
    let user = req.body
    let result = await CRUDSer.createUser(user)
    return res.redirect('/')
}

const getDeletePage = async (req,res) => {
    let userId = req.params.id
    let user = await CRUDSer.getUserById(userId)
    return res.render('delete.ejs', {userDelete:user})
}

const deleteUser = async (req, res) => {
    let userId = req.body.userId
    await CRUDSer.deleteUserById(userId)
    return res.redirect('/')
}

const getUpdatePage = async (req,res) => {
    let userId = req.params.id
    let user = await CRUDSer.getUserById(userId)
    return res.render('update.ejs', {userUpdate:user})
}

const updateUser = async (req,res) => {
    let userUpdate = req.body
    await CRUDSer.updateUser(userUpdate)
    return res.redirect('/')
}

const getUploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs')
}



const hanldeUploadFile = async (req,res) => {
const upload = utils.upload.single('profile-pic')
    upload(req,res, function (err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError)
        }
        else if (!req.file) {
            return res.send('Please select an image to upload')
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err)
        }
        else if (err) {
            return res.send(err)

        }

        res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`)
    })
}

const handleUploadMultipleFile = async (req, res) => {

}

module.exports = {
    getHomePage,
    getCreatePage,
    getDetailPage,
    postCreateUser,
    getDeletePage,
    deleteUser,
    getUpdatePage,
    updateUser,
    getUploadFilePage,
    hanldeUploadFile,
    handleUploadMultipleFile
}