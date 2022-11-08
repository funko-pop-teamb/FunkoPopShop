//this is the access point for all things database related!

const db = require('./db')
const Order = require('./models/Order')
const Order_FunkoPop = require('./models/Order_FunkoPop')
const FunkoPop = require('./models/FunkoPop')
const User = require('./models/User')
const { Sequelize } = require('sequelize')
const Order_FunkoPop = require('./models/Order_FunkoPop')

//associations could go here!

User.HasMany(Order)
Order.belongsTo(User)

const Order_FunkoPop = Sequelize.define('Order_FunkoPop', {selfGranted: DataTypes.BOOLEAN}, {timestamp: false} )
FunkoPop.belongsToMany(Order, { through: Order_FunkoPop })
Order.belongToMany(FunkoPop,  { through: Order_FunkoPop })

module.exports = {
  db,
  models: {
    User,
    Order,
    FunkoPop,
    Order_FunkoPop
  },
}
