const space = require('../index.js')

const rmSpaces = space.removeSpacesEndOfLine("My string with spaces    ")

console.log(rmSpaces)

const isEmail = space.checkValidEmail('marcelogromagnole.com.br')

console.log(isEmail)