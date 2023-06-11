const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        MondayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        },
        TuesdayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        },
        WednesdayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        },
        ThursdayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        },
        FridayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        },
        SaturdayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        },
        SundayNotifications : {
            type: DataTypes.TIME,
            allowNull: true
        }
    });
};