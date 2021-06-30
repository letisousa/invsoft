const db = require('./db');

const Cadastro = db.sequelize.define('users', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
});

//Cadastro.sync({force: true})

module.exports = Cadastro;