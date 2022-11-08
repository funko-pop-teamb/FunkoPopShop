

//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
  },
}

//this is the access point for all things database related!

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


