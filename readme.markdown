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
var winner = specificity.vs('.class', 'p.sel:after')

console.log(calc)
/*
[
    {
        'selector': '.class',
        'specificity': [0, 0, 1, 0],
        'a': 0,
        'b': 1,
        'c': 0
    },
    {
        'selector': 'p.sel:after',
        'specificity': [0, 0, 1, 2],
        'a': 0,
        'b': 1,
        'c': 2
    }
]
*/

console.log(winner)
// 'p.sel:after'
```

## API

### `specificity.calc(selector)`

return caluculation result.

### `specificity.vs(selector1, selector2)`

return selector has higher specificity.

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
