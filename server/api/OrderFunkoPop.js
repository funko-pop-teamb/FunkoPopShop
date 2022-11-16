const router = require('express').Router()
const { models: { Order_FunkoPop,FunkoPop,Order } } = require('../db')
module.exports = router

//get all data
router.get('/', async (req, res, next) => {
  try {
    const orderProducts = await Order_FunkoPop.findAll({
      include:[FunkoPop, Order]
    })
    res.json(orderProducts)
  } catch (err) {
    next(err)
  }
})

//get see all orders with specific funko
router.get('/filterByUserId/:funkoId', async (req, res, next) => {
  try {
    const {funkoId}=req.params
    const orderProducts = await Order_FunkoPop.findAll({
      where:{
        FunkoPopId:funkoId
      },
include:[FunkoPop]
    })
    res.json(orderProducts)
  } catch (err) {
    next(err)
  }
})

//get all funkos from 1 order
router.get('/filterByOrderId/:orderId', async (req, res, next) => {
  try {
    const {orderId}=req.params
    const orderProducts = await Order_FunkoPop.findAll({
      where:{
        orderId:orderId
      },
      include:[FunkoPop]
    })
    res.json(orderProducts)
  } catch (err) {
    next(err)
  }
})
router.get('/filterByOrderIdAndFunkoId/:orderId/:FunkoPopId', async (req, res, next) => {
  try {
    const {orderId, FunkoPopId}=req.params
    const updatedFunko = await Order_FunkoPop.findOne({
      where:{
        orderId:orderId,
        FunkoPopId:FunkoPopId
      }
    })
    res.json( updatedFunko)
  } catch (err) {
    next(err)
  }
})
//get details about a single funko from a single order
router.put('/filterByOrderIdAndFunkoId/:orderId/:FunkoPopId', async (req, res, next) => {
  try {
    const {orderId, FunkoPopId}=req.params
    const updatedFunko = await Order_FunkoPop.findOne({
      where:{
        orderId:orderId,
        FunkoPopId:FunkoPopId
      }
    })
    res.json(await updatedFunko.update(req.body))
  } catch (err) {
    next(err)
  }
})

//adding new item in cart
router.post('/', async (req, res, next) => {
  try {
    const newItem = await Order_FunkoPop.create(req.body)
    res.json(newItem)
  } catch (err) {
    next(err)
  }
})

//updating cart information
router.put('/:orderId/:funkoId', async (req, res, next) => {
  try {
    const {orderId, funkoId}=req.params
    const funko = await Order_FunkoPop.findOne({
      where:{
        orderId:orderId,
        FunkoPopId:funkoId,
      }
    })
    
    res.send(await funko.update(req.body))
  } catch (err) {
    next(err)
  }
})

//delete item in cart
router.delete('/:orderId/:funkoId', async (req, res, next) => {
  try {
    const {orderId, funkoId}=req.params
    const funko = await Order_FunkoPop.findOne({
      where:{
        orderId:orderId,
        FunkoPopId:funkoId
      }
    })
    await funko.destroy()
    res.send(funko)
  } catch (err) {
    next(err)
  }
})