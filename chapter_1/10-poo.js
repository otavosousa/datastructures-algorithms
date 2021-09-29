// object
var obj = {}
var obj2 = new Object()

console.log(obj, obj2)

const wizard = {
    name: {
        first: 'Gandalf',
        last: 'the Gray'
    },
    address: 'Middle Earth'
}

console.log(wizard)

// class
function Book(title, pages, autor){
    this.title = title
    this.pages = pages
    this.autor = autor
}
console.log(Book)
console.log(Book.prototype)
const afeganBook = new Book('O caçador de pipas', 450, 'Khaled')
console.log(afeganBook)
console.log(afeganBook.title)
console.log(afeganBook.pages)
console.log(afeganBook.autor)

const brazilianBook = new Book('Capitães da areia', 200, 'Jorge Amado')
console.log(brazilianBook)
console.log(brazilianBook.title)
console.log(brazilianBook.pages)
console.log(brazilianBook.autor)

// adicionar uma funcao a uma classe dinamicamente
Book.prototype.getInfo = function(){
    return `Titulo: ${this.title}, autor: ${this.autor}, pages: ${this.pages}`
}
console.log(afeganBook.getInfo())
console.log(Book.prototype)