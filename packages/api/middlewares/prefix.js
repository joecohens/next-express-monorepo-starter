module.exports = (path) => {
  return (req, res, next) => {
    const prefix = `/${path}`

    if (req.url.startsWith(prefix)) {
      const r = new RegExp(`^${prefix}`, 'i')
      const newUrl = req.url.replace(r, '')

      req.url = newUrl === '' ? '/' : newUrl;
    }

    next()
  }
}
