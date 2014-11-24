var test = require('colored-tape')
var specificity = require('..')

var selector = '.class, p.sel:after, #id:before'
var selector2 = 'div'

test('specificity.calc()', function (t) {
    var expected = [
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
        },
        {
            'selector': '#id:before',
            'specificity': [0, 1, 0, 1],
            'a': 1,
            'b': 0,
            'c': 1
        },
    ]
    t.same(specificity.calc(selector), expected)
    t.end()
})

test('specificity.vs()', function (t) {
    t.same(specificity.vs('ul.class', 'class'), 'ul.class')
    t.end()
})

test('specificity.vs()', function (t) {
    t.same(specificity.vs('ul.class', 'ul.class'), 'draw')
    t.end()
})
