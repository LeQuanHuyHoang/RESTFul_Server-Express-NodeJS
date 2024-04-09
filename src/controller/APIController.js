const CRUDSer = require('../services/CRUDService')
const getListUser = async (req, res) => {
    let users = await CRUDSer.getListUser()
    return res.status(200).json({
        data : users
    })
}

const createUser = async (req, res) => {
    let user = req.body
    if(!user.name || !user.email || !user.city) {
        return res.status(404).json({
            message: 'missing required params'
        })
    }

    await CRUDSer.createUser(user)
    let users = await CRUDSer.getListUser()
    return res.status(200).json({
        data : users
    })
}

const updateUser = async (req, res) => {
    let userUpdate = req.body
    if(!userUpdate.id || !userUpdate.name || !userUpdate.email || !userUpdate.city) {
        return res.status(404).json({
            message: 'missing required params'
        })
    }

    await CRUDSer.updateUser(userUpdate)
    let users = await CRUDSer.getListUser()
    return res.status(200).json({
        data : users
    })
}

const deleteUser = async (req, res) => {
    let userId = req.query.id
    if(!userId) {
        return res.status(404).json({
            message: 'missing required params'
        })
    }
    await CRUDSer.deleteUserById(userId)
    let users = await CRUDSer.getListUser()
    return res.status(200).json({
        data : users
    })
}

module.exports = {
    getListUser,
    createUser,
    updateUser,
    deleteUser
}