const { HasMany } = require('sequelize')
const db = require('./db')
const Order = require('./moddels/Order')
const User = require('./models/User')

//associations could go here!

User.HasMany(Order)
Order.belongsTo(User)
module.exports = {
  db,
  models: {
    User,
    Order
  },
}

