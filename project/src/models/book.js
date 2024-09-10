const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  copies: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  tableName: 'books', // Ensure this matches your database table name
  timestamps: false, // Set to true if your table has createdAt and updatedAt columns
});

module.exports = Book;

