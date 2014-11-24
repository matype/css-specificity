var test = require('colored-tape')
var specificity = require('..')

var selector = '.class, p.sel:after'

test('specificity.calc()', function (t) {
    t.same(specificity.calc(selector), [ [ 0, 0, 1, 0 ], [ 0, 0, 1, 2 ] ])
    t.end()
})

test('specificity.a()', function (t) {
    t.same(specificity.a(selector), [ 0, 0 ])
    t.end()
})

test('specificity.b()', function (t) {
    t.same(specificity.b(selector), [ 1, 1 ])
    t.end()
})

test('specificity.c()', function (t) {
    t.same(specificity.c(selector), [ 0, 2 ])
    t.end()
})
