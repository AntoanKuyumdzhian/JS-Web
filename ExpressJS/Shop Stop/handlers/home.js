const fs = require('fs')
const database = require('../config/database')
const qs = require('querystring')
const url = require('url')

module.exports = (req, res) => {
  if (req.path === '/' && req.method === 'GET') {
    fs.readFile('views/home/index.html', (err, data) => {
      if (err) {
        console.log(err)
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        })
        res.write('404 not found')
        res.end()
        return
      }
      let queryData = qs.parse(url.parse(req.url).query)
      let products = database.products.getAll()
      if (queryData.query) {
        products = products.filter(p => p.name.toLowerCase().includes(queryData.query))
      }
      let content = ''
      for (let product of products) {
        content +=
          `<div class="product-card">
             <img class="product-img" src="${product.image}">
             <h2>${product.name}</h2>
             <p>${product.description}</p>
           </div>`
      }
      let html = data.toString().replace('{content}', content)
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(html)
      res.end()
    })
  } else {
    return true
  }
}


