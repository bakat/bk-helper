'use strict'

const fs = require('fs')
const path = require('path')
const pathData = path.join(__dirname, '/data')

fs.readdirSync(pathData).forEach((file) => {
  const extname = path.extname(file)
  const basename = path.basename(file, extname)
  if (~file.indexOf('.js')) {
    exports[basename] = require(path.join(pathData, file))
  }
})
