const Sequelize=require('sequelize');
const sequelize=require('../config/config');

//import all models

const User=require('./User')(sequelize,Sequelize.DataTypes);

//exports models and sequelize instance

module.exports={User,sequelize,};