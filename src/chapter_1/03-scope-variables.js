var myVariable = 'Global'
console.log(myVariable)

myOtherVariable = 'Global'
console.log(myOtherVariable)

function myFunction(){
    myVariable = 'local'
    return myVariable
}
console.log(myFunction())
console.log(myVariable)

function myOtherFunction(){
    myOtherVariable = 'local'
    return myOtherVariable
}
console.log(myOtherFunction())

console.log(myOtherVariable)