const CRUDSer = require('../services/CRUDService')
const {stringify} = require("nodemon/lib/utils");

const getHomePage = async (req, res) => {
    let result = await CRUDSer.getListUser()
    return res.render('index.ejs', {listUser:result})
}

module.exports = getHomePage