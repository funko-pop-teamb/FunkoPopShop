const router = require('express').Router()
const { models: { Order } } = require('../db')

module.exports = router

router.get('/', async (req, res, next) => {
    try {

        res.send(await Order.findAll())

    } catch (err) {
        console.log("Error in GET/api/Orders")

    }
})



router.get('/filter/status/:userId/cart', async (req, res, next) => {
    try {
        const { userId } = req.params
        res.send(await Order.findOne({

            where: { orderStatus: 'Cart', 
                userId:userId }

        }))

    } catch (err) {

        console.log("Error in GET/api/orderId")

    }

})
router.get('/filter/:orderId', async (req, res, next) => {
    try {
        const { orderId } = req.params
        res.json(await Order.findAll({

            where: { id: orderId }

        }))

    } catch (err) {

        console.log("Error in GET/api/orderId")

    }

})
router.get('/filter/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params
        res.json(await Order.findAll({

            where: { id: userId }

        }))

    } catch (err) {

        console.log("Error in GET/api/userId")

    }


})

router.get('/:orderId', async (req, res, next) => {
    try {
        const { orderId } = req.params
        res.send(await Order.findByPk(orderId))
    } catch (err) {
        console.log('Error in GET/api/Order/:id', err)
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newOrder = await Order.create(req.body)
        res.send(newOrder)
    } catch (err) {
        console.log('Error in POST/api/Order')
        next(err)
    }
})

router.delete('/:orderId', async (req, res, next) => {
    try {
        const { orderId } = req.params
        let deleteOrder = await Order.findByPk(orderId)
        if (!deleteOrder) {
            res.status(404).send('This Order Does Not Exist')
            return
        }
        res.send(await deleteOrder.destroy(orderId))
    } catch (err) {
        console.log('Error in DELETE/api/Order/:OrderId', err)
        next(err)
    }
})
router.put('/:orderId', async (req, res, next) => {
    try {
        const { orderId } = req.params
        let updateOrder = await Order.findByPk(orderId)
        if (!updateOrder) {
            res.status(404).send('Cannot Update A Non-Existing Order')
            return
        }
        res.send(await updateOrder.update(req.body))
    } catch (err) {
        console.log('Error in PUT/api/Order/:id', err)
        next(err)
    }
})







