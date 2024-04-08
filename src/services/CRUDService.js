const conn = require('../configs/database')

const getListUser = async () => {
    let[result] = await conn.query('select * from User')
    return result
}

module.exports = {
    getListUser
}