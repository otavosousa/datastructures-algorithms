function test(value){
    return value ? console.log('isTrue') : console.log('isFalse')
}
// returns false
test(false)
test('')
test(0)
test(-0)
test(undefined)
test(null)
test(NaN)

// return true
test(true)
test('otavio')
test([1, 2])
test({})
test([])
test(-4)

// any object is true
test(new String(''))
test(new Number(NaN))
test(new Boolean(false))
