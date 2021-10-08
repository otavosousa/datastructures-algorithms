// npx babel chapter_2/22.1-modules.js --out-dir lib

// precisa do .js no final para utilizar modulos no js vanilla
import { calcArea, squareArea } from "./22.2-modules.js"; // só precisa importar com chaves quando não tem o export default
import calcDouble from "./22.3-modules.js"
import * as calculator from './22.4-modules.js'
import Book from './22.5-modules.js'

console.log(calcArea(2))
console.log(squareArea(3))
console.log(calcDouble(4))
console.log(calculator.sum(13, 6))
console.log(calculator.mult(2, 2))

const book = new Book('O auto da compadecida', 'Suassuna', 100)
console.log(book.printTitle())