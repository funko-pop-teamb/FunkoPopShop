const router = require('express').Router()
const { models: { FunkoPop } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        res.send(await FunkoPop.findAll())
    } catch (err) {
        console.log('Error in GET/api/funkoPop')
    }
})

router.get('/:category', async (req, res, next) => {
    try {
        const { category } = req.params
        res.send(await FunkoPop.findAll(category, {
            where: { Category: category}
        }))
    } catch (err) {

    }
})

router.get('/:funkoId', async (req, res, next) => {
    try {
        const { funkoId } = req.params
        res.send(await FunkoPop.findByPk(id))
    } catch (err) {
        console.log('Error in GET/api/funkoPop/:id', err)
        next(err)
    }
})

router.post('/', async(req, res, next) => {
    try {
        const newFunko = await FunkoPop.create(req.body)
        res,send(newFunko)
    } catch (err) {
        console.log('Error in POST/api/funkoPop')
        next(err)
    }
})

router.delete('/:funkoId', async (req, res, next) => {
    try{
        const {funkoId} = req.params
        let deleteFunko = await FunkoPop.findByPk(funkoId)
        if (!deleteFunko) {
            res.status(404).send ('This Funko Does Not Exist')
            return
        }
    } catch (err) {
        console.log('Error in DELETE/api/funkoPop/:id', err)
        next(err)
    }
})

router.put ('/:funkoId', async (req, res, next) => {
    try {
        const {funkoId} = req.params
        let updateFunko = await FunkoPop.findByPk(funkoId)
        if (!updateFunko) {
            res.status(404).send('Cannot Update A Non-Existing Funko')
            return
        }
    } catch (err) {
        console.log('Error in PUT/api/funkoPop/:id', err)
        next(err)
    }
})