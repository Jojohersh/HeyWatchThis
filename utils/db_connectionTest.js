module.exports = async function testDBConnection(sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection successfully established');
        return true;
    } catch(error)
    {
        console.log('Could not connect to Database');
        console.log(error.message);
        process.exit(1);
    }
}