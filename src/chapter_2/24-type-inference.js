// tsc src/chapter_2/24-type-inference.ts
// let age: number = 20
// let isTrue: boolean = true
// let text: string = 'Text'
var age = 20; // não precisa por tipo pq infere-se q é um number
var isTrue = true; // não precisa por tipo pq infere-se q é um boolean
var text = 'Text'; // não precisa por tipo pq infere-se q é uma string
// definir tipo quando iniciamos uma variável e não atribuimos um valo à ela
var favoriteLanguage; // precisa definir
var languages = ['Js', 'Ruby', 'Java'];
favoriteLanguage = languages[1];
console.log(age, isTrue, text, favoriteLanguage);
