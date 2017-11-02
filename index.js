'use strict'

const fs = require('fs')
const path = require('path')
const fastparallel = require('fastparallel')
const files = fs.readdirSync(__dirname + '/data')

fastparallel(files, (file, cb) => {
  const extname = path.extname(file)
  const basename = path.basename(file, extname)

  if (~file.indexOf('.js')) {
    exports[basename] = require(__dirname + '/data/' + file)
  }
})
