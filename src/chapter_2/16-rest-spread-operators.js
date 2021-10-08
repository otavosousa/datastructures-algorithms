function sum(x = 1, y = 2, z = 3) {
    return x + y + z
}
const params = [3, 7, 9]

// ES6 -> SPREAD
console.log(sum(...params))

// ES5 -> .APPLY
console.log(sum.apply(undefined, params));

// ----------------------------------------------------- //

// ES6 -> REST
function restParameterFunction(x, y, ...a){
    return (x + y) * a.length
}
console.log(restParameterFunction(1, 2, 'hello', true, 50))

//ES5 -> ARGUMENTS
function restParameterFunctionES5(x, y){
    var a = Array.prototype.slice.call(arguments, 2)
    return (x + y) * a.length
}
console.log(restParameterFunctionES5(1, 2, 'hello', true, 7));