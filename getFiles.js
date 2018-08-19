const fs = require('fs')

const data = __dirname + '/data'

module.exports = getFiles

function getFiles (dir, callback) {
  fs.readdir(data, (err, files) => {
    callback(err, files)
  })
}

// fs.readdir is an asynchronous function that reads the contents of a directory
// The callback gets two arguments (err, files)
// where files is an array of the names of the files in the directory
