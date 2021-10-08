// RESERVE
class Book {
    constructor(title, autor, pages){
        this.title = title 
        this.autor = autor 
        this.pages = pages
    }
    printTitle() {
        return console.log(this.title)
    }
}

class HeroesBook extends Book{
    constructor(title, autor, pages, heroes) {
        super(title, autor, pages)
        this.heroes = heroes
    }
    printInfo(){
        return console.log(`The ${this.heroes}'s adventures from ${this.autor}, ${this.title}, ${this.pages} pages`)
    }
}

const heroes = new HeroesBook('O cavaleiro das trevas', 'Frank Miler', 552, 'Batman')
heroes.printInfo()
