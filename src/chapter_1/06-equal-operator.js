function verifyTwoEquais(value1, value2){
    return value1 == value2 ? console.log(true) : console.log(false)
}

verifyTwoEquais('otavio', true) 
    // toNumber('otavio') == toNumber(true)
    // NaN == 1
verifyTwoEquais('otavio', false)
    // toNumber('otavio') == toNumber(true)
    // NaN == 0

function verifyThreeEquais(value1, value2){
    return value1 === value2 ? console.log(true) : console.log(false)
}

verifyThreeEquais('otavio', true)
verifyThreeEquais(1, 2)
const bird = {
    name: 'Catatau'
}
const bird2 = {
    name: 'Catatau'
}
verifyThreeEquais(bird, bird2)
    // diference objects
verifyThreeEquais(JSON.stringify(bird), JSON.stringify(bird2))
    // transform type string and compare type and value from string

const car = {
    name: 'Fiat'
}
const car2 = car
const car3 = car
verifyThreeEquais(car2, car3)
    // same objects