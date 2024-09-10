const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Book = require('./book');

const BorrowingHistory = sequelize.define('BorrowingHistory', {
  borrowDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  returnDate: {
    type: DataTypes.DATE
  }
});

BorrowingHistory.belongsTo(User, { foreignKey: 'userId' });
BorrowingHistory.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = BorrowingHistory;

