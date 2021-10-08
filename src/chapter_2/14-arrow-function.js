var circleAreaEx1 = function(r){
    var PI = 3.14
    var area = PI * r * r
    return area
}
console.log(circleAreaEx1(5))

const circleAreaEx2 = r => {
    const PI = 3.14
    const area = PI * r * r
    return area
}
console.log(circleAreaEx2(5))

const circleAreaEx3 = r => 3.14 * r * r
console.log(circleAreaEx3(5))

const sayHello = () => console.log('Hello!')
sayHello()