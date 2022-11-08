const Sequelize = require('sequelize');
const db = require('./database');

const Order = db.define('orders', {
  userId: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  totalPrice: {
    type: Sequelize.FLOAT,
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  orderStatus:{
    type: Sequelize.ENUM('Cart','Pending','Shipping','Complete')
  }

});

module.exports = Order