const knex = require("./knex");

function createUser(username, password) {
    return knex("sql").insert(username, password);
};

function getAllUsers() {
    return knex("sql").select("*");
};

function deleteUser(username) {
    return knex("sql").where("username", username).del();
};

function updateUser(username, password) {
    return knex("sql").where("username", username).update(password)
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
}