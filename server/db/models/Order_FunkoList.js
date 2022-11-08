const Sequelize = require('sequelize')
const db = require('../db')

const Order_FunkoList = db.define(order_product, {
    orderId: {
        type: Sequelize.INTEGER
    },

    funkoId: {
        type: Sequelize.INTEGER
    },

    quantity: {
        funkoPrice: {
            type: Sequelize.DECIMAL
        }
    }
})

module.exports = Order_FunkoList