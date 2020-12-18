import AppError from './errors/AppErrors.js'

const checkValidEmail = str => {
    const re = new RegExp("^\\w*(\\.\\w*)?@\\w*\\.[a-z]+(\\.[a-z]+)?$")

    const test = re.test(str)

    if (!test) {
        return new AppError("Not a valid email")
    }

    return true
}

const removeSpacesEndOfLine = str => {
    const re = new RegExp("\\s*$")
    const arrayResult = re.exec(str)

    if (str.length < 1) {
        return new AppError("Need a valid string")
    }

    if (arrayResult[0].length < 1) {
        return new AppError("Your string doesnt have spaces at the end of line")
    }

    const result = str.replace(arrayResult[0], '')

    return result
}

export default {
    checkValidEmail,
    removeSpacesEndOfLine
}