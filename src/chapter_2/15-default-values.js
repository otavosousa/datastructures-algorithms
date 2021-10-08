// ES6
function sumEx1(x = 1, y = 2, z = 3){
    return x + y + z
}
console.log(sumEx1())
console.log(sumEx1(4, 2))

// ES5
function sumEx2(x, y, z) {
    if(x === undefined) x = 1
    if(y === undefined) y = 2
    if(z === undefined) z = 3
    return x + y + z
}
console.log(sumEx2())
console.log(sumEx2(4, 2))

function sumEx3(){
    console.log(arguments)
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3
    return x + y + z
}
console.log(sumEx3())
console.log(sumEx3(4, 2))