const { Router } = require('express')
const { index, show, create, update, remove } = require('../controllers/product.controller.js')
const is_admin_middleware = require('../middlewares/is_admin.js')

const router = Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', is_admin_middleware, create)
router.put('/:id', is_admin_middleware, update)
router.delete('/:id', is_admin_middleware, remove)

module.exports = router