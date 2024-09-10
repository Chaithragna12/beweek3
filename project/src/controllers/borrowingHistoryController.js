// models/BorrowingHistory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure correct path to your Sequelize instance

const BorrowingHistory = sequelize.define('BorrowingHistory', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  borrowedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: false // Disable createdAt and updatedAt if not needed
});

module.exports = BorrowingHistory;

