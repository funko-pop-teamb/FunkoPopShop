const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
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
  orderStatus: {
    type: Sequelize.ENUM('Cart', 'Pending', 'Shipping', 'Complete')
  }

});


module.exports = Order

