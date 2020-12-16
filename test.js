const space = require('./index')

const rmSpaces = space.removeSpacesEndOfLine("aijsdoaisdj   ")

console.log(rmSpaces)

const isEmail = space.checkValidEmail('marcelog@romagnole.com.br')

console.log(isEmail)