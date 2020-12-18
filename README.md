# Space 👨‍🚀☄

<div align="center">

[![GitHub issues](https://img.shields.io/github/issues/marcelogaldino/space?style=plastic)](https://github.com/marcelogaldino/space/issues)
[![GitHub forks](https://img.shields.io/github/forks/marcelogaldino/space?style=plastic)](https://github.com/marcelogaldino/space/network)
[![GitHub stars](https://img.shields.io/github/stars/marcelogaldino/space?style=plastic)](https://github.com/marcelogaldino/space/stargazers)
[![GitHub license](https://img.shields.io/github/license/marcelogaldino/space?style=plastic)](https://github.com/marcelogaldino/space/blob/main/LICENSE)
[![GitHub license](https://img.shields.io/badge/npm-v0.05-red?style=plastic)](https://www.npmjs.com/package/@marcelogaldino/space)

</div>

> Everyone's favorite regex validations build in JS.

## Table of Contents

- [Why should I use Space?](#Why-should-I-use-Space)
- [Documentation](#Documentation)
- [How to use?](#How-to-use)
- [Contributing](#Contributing)
- [License](#License)

## Why should I use Space?

Space borned to be simple and easy to use, it helps you validate strings with [regular expressions (regex)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).

## Documentation 

| name                  | type     | description                                     |
|-----------------------|----------|-------------------------------------------------|
| checkValidEmail       | `string` | returns `True` or `False`                       |
| removeSpacesEndOfLine | `string` | returns your `string` without spaces at the end |

## How to use?

**Installing the package**
```bash
# Using NPM
npm i @marcelogaldino/space

# Using Yarn
yarn add @marcelogaldino/space
```

Below we have some examples using **Space** validations, you also can check the [examples folder](./src/examples).

**Removing Spaces at the end.**
```js
const space = require('../index.js')

space.removeSpacesEndOfLine("My string with spaces at the end of the line   ")

// output
// "My string with spaces at the end of the line"
```

**Checking if is a valid email.**
```js
const space = require('../index.js')

space.checkValidEmail('marcelog@marcelogaldino.com')

// output
// "true"
```

## Contributing

Check out the [contributing](./CONTRIBUTING.md) page to see our guidelines.

## License

This project is under the [MIT license](https://github.com/marcelogaldino/space/blob/main/LICENSE). Released in 2020. 

Made with love by [Marcelo Galdino](https://www.linkedin.com/in/marcelogaldino/) 💜👨‍🚀