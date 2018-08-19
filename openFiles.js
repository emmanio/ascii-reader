const path = require('path')
const fs = require('fs')

const data = __dirname + '/data'
module.exports = openFiles

function openFiles (file, callback) {
  const dirFile = path.join(data, file)
  fs.readFile(dirFile, 'utf8', (err, imageFile) => {
    callback(err, imageFile)
  })
}

// fs.readFile is an asynchronous function that reads the entire contents of a file.
// the callback is passed two arguments (err, data) where data is the contents of the file.
