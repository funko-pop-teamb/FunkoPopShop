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

router.get('/filter/:category', async (req, res, next) => {
    try {
        const { category } = req.params
        res.json(await FunkoPop.findAll( {

            where: { category: category }
        }))
    } catch (err) {

    }
})

router.get('/:funkoId', async (req, res, next) => {
    try {
        const { funkoId } = req.params
        res.send(await FunkoPop.findByPk(funkoId))
    } catch (err) {
        console.log('Error in GET/api/funkoPop/:id', err)
        next(err)
    }
})

//LINKS FOR SEARCH/SORT DROPDOWN MENU

router.get('/sort/byName', async (req, res, next) => {
    try {
        res.send(await FunkoPop.findAll({order: [
            ["name", "ASC"],
            ],}))
    } catch (err) {
        console.log('Error in GET/sort/byName', err)
    }
})

router.get('/sort/priceLow', async (req, res, next) => {
    try {
        res.send(await FunkoPop.findAll({order: [
            ["price", "ASC"],
            ],}))
    } catch (err) {
        console.log('Error in GET/sort/priceLow', err)
    }
})

router.get('/sort/priceHigh', async (req, res, next) => {
    try {
        res.send(await FunkoPop.findAll({order: [
            ["price", "DESC"],
            ],}))
    } catch (err) {
        console.log('Error in GET/sort/priceHigh', err)
    }
})

router.get('/sort/mini', async (req, res, next) => {
    try {
        res.json(await FunkoPop.findAll( {

            where: { size: 'mini' }
        }))
    } catch (err) {
        console.log('Error in GET/sort/mini', err)
    }
})

router.get('/sort/regular', async (req, res, next) => {
    try {
        res.json(await FunkoPop.findAll( {
            where: { size: 'regular' }
        }))
    } catch (err) {
        console.log('Error in GET/sort/regular', err)
    }
})

router.get('/sort/jumbo', async (req, res, next) => {
    try {
        res.json(await FunkoPop.findAll( {
            where: { size: 'jumbo' }
        }))
    } catch (err) {
        console.log('Error in GET/sort/jumbo', err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newFunko = await FunkoPop.create(req.body)
        res.send(newFunko)
    } catch (err) {
        console.log('Error in POST/api/funkoPop')
        next(err)
    }
})

router.delete('/:funkoId', async (req, res, next) => {
    try {
        const { funkoId } = req.params
        let deleteFunko = await FunkoPop.findByPk(funkoId)
        if (!deleteFunko) {
            res.status(404).send('This Funko Does Not Exist')
            return
        }
        res.send(await deleteFunko.destroy(funkoId))
    } catch (err) {
        console.log('Error in DELETE/api/funkoPop/:funkoId', err)
        next(err)
    }
})

router.put('/:funkoId', async (req, res, next) => {
    try {
        const { funkoId } = req.params
        let updateFunko = await FunkoPop.findByPk(funkoId)
        if (!updateFunko) {
            res.status(404).send('Cannot Update A Non-Existing Funko')
            return
        }
        res.send(await updateFunko.update(req.body))
    } catch (err) {
        console.log('Error in PUT/api/funkoPop/:id', err)
        next(err)
    }
})