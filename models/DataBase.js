const Sequelize = require("sequelize");
const sequelize = new Sequelize("customersatisfaction", "root", "rubikadmin", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize,
}