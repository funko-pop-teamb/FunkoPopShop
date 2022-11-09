const router = require('express').Router()
module.exports = router

//all api routes start here
router.get('/', (req, res) => {
  res,send('All routes start with /api')
})

//route connections
router.use('/users', require('./users'))

router.use('/funkoPop', require('./funkoPop'))

router.use('/Orders', require('./Order'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
