var spec = require('./')

var calc = spec.calc('.class, p.sel:after')
var a = spec.a('.class, p.sel:after')
var b = spec.b('.class, p.sel:after')
var c = spec.c('.class, p.sel:after')

console.log(calc)
console.log(a)
console.log(b)
console.log(c)
