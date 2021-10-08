// tsc src/chapter_2/25-interface.ts  

// As interfaces trazem as descrições de um objeto.
// Elas definem o tipo das propriedades e o tipo de retorno de uma funcao.
interface IPerson {
    name: string,
    age: number
}
function printPerson(person: IPerson){
    return console.log(person.name, person.age)
}
printPerson({name: 'John', age: 22})
printPerson({name: 'Mary', age: 50, phone: '33998709'}) //duck typing não funciona


interface ICompare {
    compareTo(num): number
}
class Obj implements ICompare {
    age: number;
    compareTo(num): number {
        if(this.age === num.age) {
            return 0
        }
        return this.age > num.age ? 1 : -1
    }
}
const obj = new Obj()
console.log(obj)
