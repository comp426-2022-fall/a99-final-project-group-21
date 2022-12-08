const knex = require("knex");


const connectedKnex = knex({
    client: "sqlite",
    connection: {
        filename: "sql.sql"
    }
})

module.exports = connectedKnex;