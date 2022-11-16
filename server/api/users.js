const router = require('express').Router()
const { models: { User, Order }} = require('../db')
const Order_FunkoPop = require('../db/models/Order_FunkoPop')
module.exports = router

//get all exisiting usersId  username firstName lastName and email
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username','firstName','lastName','email'],
      include:[Order]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params
    const oneUser = await User.findOne({
        where: {
            id: userId,
          },
          attributes: { exclude: ['password'] },
          include:[Order_FunkoPop]
    })
    res.json(oneUser)
  } catch (err) {
    next(err)
  }
})

//add new user
router.post('/', async (req, res, next) => {
  try {
    const newUsers = await User.create(req.body)
    res.send(newUsers)
  } catch (err) {
    next(err)
  }
})

//updating user information
router.put('/:userId', async (req, res, next) => {
  try {
    
    const user = await User.findByPk(req.params.userId)
    res.send(await user.update(req.body))
  } catch (err) {
    next(err)
  }
})

//delete user
router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.destroy()
    res.send(user)
  } catch (err) {
    next(err)
  }
})

