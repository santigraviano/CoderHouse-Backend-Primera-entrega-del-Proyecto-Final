const { Router } = require('express')
const { create, remove, get_products, add_product, remove_product } = require('../controllers/cart.controller.js')

const router = Router()

router.post('/', create)
router.delete('/:id', remove)
router.get('/:id/productos', get_products)
router.post('/:id/productos/:product_id', add_product)
router.delete('/:id/productos/:product_id', remove_product)

module.exports = router