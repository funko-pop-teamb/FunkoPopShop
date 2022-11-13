const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
  totalPrice: {
    type: Sequelize.FLOAT,
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
  },
  orderStatus: {
    type: Sequelize.ENUM({
      values:['Cart', 'Pending', 'Shipping', 'Complete']
    }),
    defaultValue: 'Cart',
  }

});

module.exports = Order
