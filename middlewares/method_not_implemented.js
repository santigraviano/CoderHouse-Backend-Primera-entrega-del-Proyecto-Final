const method_not_implemented = (req, res, next) => {
  res.json({ error: -2, description: `Ruta ${ req.originalUrl } metodo ${ req.method } no implementada.` })
}

module.exports = method_not_implemented