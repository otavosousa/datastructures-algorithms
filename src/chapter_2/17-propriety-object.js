// INITIALIZATION VARIABLES
//ES6
const [x, y] = [10, 20]
console.log(x , y)
// ES5
var c = 10
var d = 20
console.log(c, d)

// ---------------------- //

// SWAP
// ES6
let [num1, num2] = [22, 33]
console.log(num1, num2);
[num2, num1] = [num1, num2]
console.log(num1, num2);

//ES5
var num1ES5 = 90
var num2ES5 = 60
console.log(num1ES5, num2ES5);
var temp = num1ES5
num1ES5 = num2ES5
num2ES5 = temp
console.log(num1ES5, num2ES5);

// SHORT PROPRIETY 
//ES6
const [title, autor] = ['O caçador de pipas', 'Khalead']
const obj = {title, autor}
console.log(obj)

//ES5
var titleES5 = 'A culpa é das estrelas'
var autorES5 = 'John Green'
const objES5 = {titleES5: titleES5, autorES5: autorES5}
console.log(objES5)

// DECLARE METHOD EQUAL PROPRIETY
// ES6
const car = {
    model: 'honda',
    color: 'gray',
    run(){
        console.log(`${this.model} is running`)
    }
}
car.run()

// ES5
const carES5 = {
    model: 'golzin',
    color: 'black',
    run: function run(){
        console.log(this.model + ' is running')
    }
}
carES5.run()
