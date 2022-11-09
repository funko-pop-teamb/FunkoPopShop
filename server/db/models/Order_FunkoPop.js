const Sequelize = require('sequelize')
const db = require('../db')

const Order_FunkoPop = db.define('order_funkoPop', {
    orderId: {
        type: Sequelize.INTEGER
    },

    funkoId: {
        type: Sequelize.INTEGER
    },

    quantity: {
        type: Sequelize.INTEGER
    },
    
    funkoPrice: {
        type: Sequelize.DECIMAL
    }
})

module.exports = Order_FunkoPop