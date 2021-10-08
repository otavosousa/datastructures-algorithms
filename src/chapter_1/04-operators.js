// aritimeticos
var num = 0
num = num + 2 // 2
num = num * 3 // 6
num = num / 2 // 3
num ++ // 4
num -- // 3

// atribuicao
num += 1 // num = num + 1
num -= 2 // num = num - 2
num *= 3 // num = num * 3
num /= 2 // num = num / 2
num %= 3 // num = num % 3
console.log(num)

//comparacao
console.log('num == 1: ', num == 1)
console.log('num === 1: ', num === 1);
console.log('num != 1: ', num != 1);
console.log('num !== 1: ', num !== 1)
console.log('num > 0 ', num > 0);
console.log('num >= 0 ', num >= 0);
console.log('num < 1 ', num < 1);
console.log('num <= 1 ', num <= 1);

//logicos
console.log('true && false ', true && false)
console.log('true || false ', true || false)
console.log('!true ', (!true))

//bit a bit (bitwise)
console.log('5 & 1 ', 5 & 1) // e
console.log('5 || 1 ', 5 || 1) // ou
console.log('(~ 5) ', (~ 5)) // negacao
console.log('5 ^ 1 ', (5 ^ 1)) // ou exclusivo?
console.log('5 << 1 ', (5 << 1)) // deslocamento para esquerda?
console.log('5 >> 1', 5 >> 1) // deslocamento para direita?

// operador typeof
console.log('otavio ',typeof('otavio'))
console.log('1 ', typeof(1))
console.log('2.5 ', typeof(2.5))
console.log('true ', typeof(true))
console.log('[1, 2, 3] ', typeof([1, 2, 3]))
console.log('{name: otavio} ', typeof({name: 'otavio'}))
function myname(name){
    return name
}
console.log('myName() ', typeof(myname))

// delete
const bird = {
    name: 'Catatau',
    breed: 'Cacatua'
}
console.log(bird)
delete bird.breed
console.log(bird)