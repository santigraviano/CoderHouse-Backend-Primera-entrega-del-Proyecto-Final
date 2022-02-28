const is_admin = true || process.env.IS_ADMIN

const is_admin_middleware = (req, res, next) => {
  if (!is_admin)
    res.json({ error: -1, description: `Ruta ${ req.originalUrl } método ${ req.method } no autorizada` })
  else next()
}

module.exports = is_admin_middleware