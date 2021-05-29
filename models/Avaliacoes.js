const DataBase = require("./DataBase")

const avaliacoes = DataBase.sequelize.define("Avaliações", {
    Ruim: {
        type: DataBase.Sequelize.TEXT
    },
    Bom: {
        type: DataBase.Sequelize.TEXT
    },
    Otimo: {
        type: DataBase.Sequelize.TEXT
    }
})

// avaliacoes.sync({force: true});
module.exports = avaliacoes;