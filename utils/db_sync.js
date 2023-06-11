const Sequelize = require('sequelize');
const config = require('../config').development;
const testDbConnection = require('./db_connectionTest');
const models = [
    require('../models/user')
];

const sequelize = new Sequelize(config);
syncDB(sequelize);


async function syncDB(sequelize) {
    var connected = await testDbConnection(sequelize);
    console.log(`connected: ${connected}`);

    if (connected) {
        for (const model of models) {
            model(sequelize);
        }
        sequelize.sync({force: true})
    }
}