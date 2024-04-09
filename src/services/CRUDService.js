const conn = require('../configs/database')

const getListUser = async () => {
    let[result] = await conn.query('select * from User')
    return result
}

const getUserById = async (userId) => {
    let[result] = await conn.query('select * from User where id = ?', [userId])
    let user = result && result.length > 0 ? result[0] : {};
    return user
}

const createUser = async (user) => {
    let[result] = await conn.query('insert into User (email, name, city) values (?, ?, ?)',[user.email, user.name, user.city])
    return result
}

const deleteUserById= async (userId)  => {
    await conn.query('delete from User where id=?', [userId])
}

const updateUser = async (user) => {
    let email = user.email;
    let name = user.name;
    let city = user.city;
    let userId = user.id;
    await conn.query('UPDATE User SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, userId])
}

module.exports = {
    getListUser,
    getUserById,
    createUser,
    deleteUserById,
    updateUser
}