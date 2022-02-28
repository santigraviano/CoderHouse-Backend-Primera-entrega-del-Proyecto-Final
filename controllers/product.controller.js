const Product = require('../models/Product.js')

const index = (req, res) => {
  res.json(Product.all())
}

const create = (req, res) => {
  const { name, description, code, image, price, stock } = req.body
  const product = Product.create(name, description, code, image, price, stock)
  res.json(product)
}

const show = (req, res) => {
  try {
    const product = Product.find(req.params.id)
    res.json(product)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

const update = (req, res) => {
  try {
    const product = Product.update(req.params.id, req.body)
    res.json(product)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

const remove = (req, res) => {
  try {
    const product = Product.delete(req.params.id)
    res.json(product)
  }
  catch (e) {
    res.json({ error: e.message })
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  remove
}