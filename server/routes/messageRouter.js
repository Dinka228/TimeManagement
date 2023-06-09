const Router = require('express')
const router=new Router()
const messageController = require('../controllers/messageControllers')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',messageController.create)
router.get('/:userId',messageController.getAll)

module.exports = router