const fs = require('fs')

function getContentType (url) {
  if (url.endsWith('.ico')) {
    return 'image/x-icon'
  } else if (url.endsWith('.html')) {
    return 'text/html'
  } else if (url.endsWith('.css')) {
    return 'text/css'
  } else if (url.endsWith('js')) {
    return 'application/javascript'
  } else {
    return 'text/plain'
  }
}

module.exports = (req, res) => {
  if (req.path.startsWith('/content/') && req.method === 'GET') {
    fs.readFile('.' + req.path, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        })
        res.write('Resource not found!')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type': getContentType(req.path)
      })
      res.write(data)
      res.end()
    })
  } else {
    return true
  }
}
