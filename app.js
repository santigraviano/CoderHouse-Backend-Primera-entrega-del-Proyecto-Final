const express = require('express')
const product_routes = require('./routes/product.routes.js')
const cart_routes = require('./routes/cart.routes.js')
const method_not_implemented = require('./middlewares/method_not_implemented.js')

const PORT = process.env.PORT || 8080

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/productos', product_routes)
app.use('/api/carrito', cart_routes)

app.use(method_not_implemented)

app.listen(PORT, e => {
  console.log(`Listening to port ${PORT}`)
})
