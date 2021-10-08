// CLASS
//ES6
class Book {

    constructor(title, autor, pages){
        this.title = title,
        this.autor = autor,
        this.pages = pages
    }
    printTitle(){
        return console.log(this.title)
    }
}

const book = new Book('O caçador de Pipas', 'Khaled', 400)
console.log(book)
book.printTitle()

// ES5
function BookES5(title, autor, pages) {
    this.title = title
    this.autor = autor
    this.pages = pages
}
BookES5.prototype.printTitle = function(){
    return console.log(this.title)
}
var bookES5 = new BookES5('Tartarugas até lá embaixo', 'John Greeen', 100)
console.log(bookES5)
bookES5.printTitle()