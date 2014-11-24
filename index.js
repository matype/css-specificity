var specimen = require('specimen')

module.exports.calc = function (selector) {
    return calc(selector)
}

module.exports.vs = function (selector1, selector2) {
    var res1 = calc(selector1)[0]
    var res2 = calc(selector2)[0]
    for (var i = 1; i < 4; i++) {
        if (res1.specificity[i] != res2.specificity[i]) {
            var winner = Math.max(res1.specificity[i], res2.specificity[i])
            if (winner == res1.specificity[i]) return selector1
            else if( winner == res2.specificity[i]) return selector2
        }
    }
    return 'draw'
}

function calc (selector) {
    var selectors = arraySelector(selector)
    var res = []
    selectors.forEach(function (selector) {
        var calcResult = specimen(selector)
        res.push({
            'selector': selector,
            'specificity': calcResult,
            'a': calcResult[1],
            'b': calcResult[2],
            'c': calcResult[3]
        })
    })
    return res
}

function arraySelector (selector) {
    var arrSel = selector.split(',')
    arrSel.forEach(function (sel, i) {
        arrSel[i] = sel.trim()
    })
    return arrSel
}

function isOnlyClassSelector (selector) {
    console.log(selector)
    if (selector.match(/^\.|\s/)) return true
    return false
}
