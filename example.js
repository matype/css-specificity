var specificity = require('./')

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
