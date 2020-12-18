import space from '../index.mjs'

const rmSpaces = space.removeSpacesEndOfLine("my String with spaces   ")

console.log(rmSpaces)

const isEmail = space.checkValidEmail('marcelog@romagnole.com.br')

console.log(isEmail)