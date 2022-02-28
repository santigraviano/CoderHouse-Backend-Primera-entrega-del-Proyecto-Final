const Cart = require('../models/Cart.js')
const Product = require('../models/Product.js')

const create = (req, res) => {
  const cart = Cart.create()
  res.json(cart)
}

const remove = (req, res) => {
  try {
    const cart = Cart.delete(req.params.id)
    res.json(cart)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

const get_products = (req, res) => {
  try {
    const cart = Cart.find(req.params.id)
    res.json(cart.products)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

const add_product = (req, res) => {
  try {
    const cart = Cart.find(req.params.id)
    const product = Product.find(req.params.product_id)

    cart.products.push(product)

    Cart.update(req.params.id, { products: cart.products })
    
    return res.json(cart)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

const remove_product = (req, res) => {
  try {
    const { id, product_id } = req.params
    const cart = Cart.find(id)
    const product = cart.products.find(item => item.id == product_id)

    if (!product) throw Error(`Producto #${product_id} no encontrado en carrito #${id}`)

    const index = cart.products.indexOf(product)
    cart.products.splice(index, 1)

    Cart.update(id, { products: cart.products })

    return res.json(cart)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

module.exports = {
  create,
  remove,
  get_products,
  add_product,
  remove_product
}