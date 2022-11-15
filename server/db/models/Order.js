const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  shippingAddress: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  orderStatus: {
    type: Sequelize.ENUM('Cart', 'Pending', 'Shipping', 'Complete'),
    defaultValue: 'Cart'
  },
  shippingName: {
    type: Sequelize.STRING,
    defaultValue: null
  }


});


module.exports = Order

