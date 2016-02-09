'use strict'

var fs = require('fs')
var path = require('path')

fs.readdirSync(__dirname + '/data').forEach(function (file) {
  var extname = path.extname(file)
  var basename = path.basename(file, extname)

  if (~file.indexOf('.js')) {
    exports[basename] = require(__dirname + '/data/' + file)
  }
})
