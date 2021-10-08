// npx babel chapter_2/22.5-modules.js --out-dir lib
export default class Book {
    constructor(title, autor, pages){
        this.title = title 
        this.autor = autor 
        this.pages = pages
    }

    printTitle(){
        return console.log(this.title)
    }
}