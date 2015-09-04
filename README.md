# normalize-unistyle

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> [Normalize CSS](https://github.com/necolas/normalize.css) as a [Unistyle](https://github.com/joakimbeng/unistyle) module

## Installation

Install `normalize-unistyle` using [npm](https://www.npmjs.com/):

```bash
npm install --save normalize-unistyle
```

## Usage

### Module usage

```javascript
import normalize from 'normalize-unistyle';

export default [
  normalize,
  /* your styles here */
];
```

## License

[Normalize.css](http://necolas.github.io/normalize.css/) is a project by [Nicolas Gallagher](https://github.com/necolas) and [Jonathan Neal](https://github.com/jonathantneal).

[Unistyle](https://github.com/joakimbeng/unistyle) port by Joakim Carlstein.

[npm-url]: https://npmjs.org/package/normalize-unistyle
[npm-image]: https://badge.fury.io/js/normalize-unistyle.svg
[travis-url]: https://travis-ci.org/joakimbeng/normalize-unistyle
[travis-image]: https://travis-ci.org/joakimbeng/normalize-unistyle.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
