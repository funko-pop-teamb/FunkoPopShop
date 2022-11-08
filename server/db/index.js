//this is the access point for all things database related!

const db = require('./db')
const Order = require('./models/Order')
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
