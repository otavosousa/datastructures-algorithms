// tsc src/chapter_2/25-interface.ts  
function printPerson(person) {
    return console.log(person.name, person.age);
}
printPerson({ name: 'John', age: 22 });
printPerson({ name: 'Mary', age: 50, phone: '33998709' }); //duck typing não funciona
var Obj = /** @class */ (function () {
    function Obj() {
    }
    Obj.prototype.compareTo = function (num) {
        if (this.age === num.age) {
            return 0;
        }
        return this.age > num.age ? 1 : -1;
    };
    return Obj;
}());
var obj = new Obj();
console.log(obj);
