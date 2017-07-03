const homeHandler = require('./home')
const favicon = require('./favicon')
const filesHandler = require('./static-files')
const product = require('./product')

module.exports = [ homeHandler, favicon, product, filesHandler ]
