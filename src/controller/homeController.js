const CRUDSer = require('../services/CRUDService')
const multer = require('multer')
const utils = require("../utils/comon");
const {uploadMultiple} = require("../utils/comon");

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

const getUploadFilePage = (req, res) => {
    return res.render('uploadFile.ejs')
}

const handleUploadFile =  (req,res) => {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError)
        }
        else if (!req.file) {
            return res.send('Please select an image to upload')
        }

        res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`)

}

const handleUploadMultipleFile = async (req, res) => {

    if (req.files.length == 0) {
            return res.send('Please select an image to upload')
        }

        let result = "You have uploaded these images: <hr />"
        const files = req.files
        let index, len

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="/image/${files[index].filename}" width="300">`
        }
        result += '<hr/><a href="/upload">Upload more images</a>'
        res.send(result)
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
    handleUploadFile,
    handleUploadMultipleFile
}