// tsc src/chapter_2/24-type-inference.ts

// let age: number = 20
// let isTrue: boolean = true
// let text: string = 'Text'

let age = 20 // não precisa por tipo pq infere-se q é um number
let isTrue = true  // não precisa por tipo pq infere-se q é um boolean
let text = 'Text'  // não precisa por tipo pq infere-se q é uma string

// definir tipo quando iniciamos uma variável e não atribuimos um valo à ela
let favoriteLanguage: string // precisa definir
const languages = ['Js', 'Ruby', 'Java']
favoriteLanguage = languages[1]

console.log(age, isTrue, text, favoriteLanguage)