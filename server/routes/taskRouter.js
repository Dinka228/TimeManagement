const Router = require('express')
const router=new Router()
const taskController = require('../controllers/taskControllers')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',taskController.create)
router.get('/:userId',taskController.getAll)
// router.post('/update',taskController.update)

module.exports = router