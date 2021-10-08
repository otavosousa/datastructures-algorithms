// GET SET
class Person {
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name
    }
    set name(name){
        return this._name = name
    }
}

const lotr = new Person('Frodo')
console.log(lotr.name)
lotr.name = 'Gandalf'
console.log(lotr.name)
console.log(lotr._name)
lotr._name = 'Sam'
console.log(lotr.name)