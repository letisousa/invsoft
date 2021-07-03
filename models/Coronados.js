const db = require('./db');

const Coronados = db.sequelize.define('coronados', {
    latitude: {
        type: db.Sequelize.DOUBLE
    },
    longitude: {
        type: db.Sequelize.DOUBLE
    },
});

Coronados.sync({force: true})

module.exports = Coronados;