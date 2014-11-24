# css-specificity [![Build Status](https://travis-ci.org/morishitter/css-specificity.svg)](https://travis-ci.org/morishitter/css-specificity)

CSS3 selector specificity calculator.

css-specificity is wrapper module of [specimen](https://github.com/brettstimmerman/specimen).

## Installation

```shell
$ npm install css-specificity
```

## Example

```javascript
var specificity = require('css-specificity')

var calc = specificity.calc('.class, p.sel:after')
var a = specificity.a('.class, p.sel:after')
var b = specificity.b('.class, p.sel:after')
var c = specificity.c('.class, p.sel:after')

console.log(calc)
// [ [ 0, 0, 1, 0 ], [ 0, 0, 1, 2 ] ]
console.log(a)
// [ 0, 0 ]
console.log(b)
// [ 1, 1 ]
console.log(c)
// [ 0, 2 ]
```

## API

### `specificity.calc(selector)`

return [specimen calculation result](https://github.com/brettstimmerman/specimen#usage)

### `specificity.a(selector)`

return count the number of ID selectors in the selector

### `specificity.b(selector)`

return count the number of class selectors, attributes selectors, and pseudo-classes in the selector

### `specificity.c(selector)`

return count the number of type selectors and pseudo-elements in the selector

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
