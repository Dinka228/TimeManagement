const Router = require('express')
const router=new Router()
const taskRouter = require('./taskRouter')
const userRouter = require('./userRouter')
const messageRouter = require('./messageRouter')


router.use('/user',userRouter)
router.use('/task',taskRouter)
router.use('/message',messageRouter)

module.exports = router