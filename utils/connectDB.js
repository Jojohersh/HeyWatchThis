const { Sequelize, DataTypes } = require('sequelize');
const testDBConnection = require('./db_connectionTest');

const config = require('../config').development;
const sequelize = new Sequelize(config);
(async (sequelize) => {
    await testDBConnection(sequelize);
})(sequelize);

module.exports = sequelize;