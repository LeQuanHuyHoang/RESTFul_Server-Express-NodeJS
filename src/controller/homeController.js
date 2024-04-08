const CRUDSer = require('../services/CRUDService')
const {stringify} = require("nodemon/lib/utils");

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

module.exports = {
    getHomePage,
    getCreatePage,
    getDetailPage,
    postCreateUser,
    getDeletePage,
    deleteUser,
    getUpdatePage,
    updateUser
}