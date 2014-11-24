var specimen = require('specimen')

module.exports.calc = function (selector) {
    return specimen(selector)
}

module.exports.a = function (selector) {
    return calcIndex(selector, 1)
}

module.exports.b = function (selector) {
    return calcIndex(selector, 2)
}

module.exports.c = function (selector) {
    return calcIndex(selector, 3)
}

function calcIndex (selector, index) {
    var calcResults = specimen(selector)
    if (Array.isArray(calcResults[0])) {
        var resArr = []
        calcResults.forEach(function (result) {
            resArr.push(result[index])
        })
        return resArr
    }
    return calcResults[index]
}
