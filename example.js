var specificity = require('./')

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
