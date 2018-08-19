const fs = require('fs')
const path = require('path')

const getFiles = require('./getFiles')
const openFiles = require('./openFiles')
const readline = require('readline')
const data = __dirname + '/data'

function welcomeMessage () {
  const message = 'Wanna see some dinosaurs?'
  console.log(message)
  return message
}
welcomeMessage()

function start () {
  getFiles(data, displayList)
}

start()

// getFiles callback function
function displayList (err, files) {
  let list = ''
  for (let i = 0; i < files.length; i++) {
    list += i + ' ' + files[i] + '\n'
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Please select a number from the list then press Enter... \n' + list, (input) => {
    rl.close()
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } else {
      let i = Number(input)
      if (i < files.length) {
        openFiles(files[i], displayFile)
      } else {
        // eslint-disable-next-line no-console
        console.log('\n woops that number isnt on our list! \n')
        getFiles(data, displayList)
      }
    }
  })
}

// openFiles callback function
function displayFile (err, imageFile) {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  } else {
    // eslint-disable-next-line no-console
    console.log(imageFile)
    getFiles(data, displayList) // displays list again for user to select artwork
  }
}

module.exports = {
  welcomeMessage,
  start,
  displayList,
  displayFile
}
