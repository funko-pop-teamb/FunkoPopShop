//this is the access point for all things database related!

const db = require('./db')
const Order = require('./models/Order')
const Order_FunkoPop = require('./models/Order_FunkoPop')
const FunkoPop = require('./models/FunkoPop')
const User = require('./models/User')
const { Sequelize } = require('sequelize')

//associations could go here!

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Order_FunkoPop)
Order_FunkoPop.belongsTo(User)

FunkoPop.hasMany(Order_FunkoPop)
Order.hasMany(Order_FunkoPop)
Order_FunkoPop.belongsTo(Order)
Order_FunkoPop.belongsTo(FunkoPop)

module.exports = {
  db,
  models: {
    User,
    Order,
    FunkoPop,
    Order_FunkoPop
  },
}
