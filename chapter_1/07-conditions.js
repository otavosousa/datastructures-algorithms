const month = 3

if(month === 1) {
    // return console.log('its january') not work
    // colocar return aq cancela o resto da execução de todo o resto do código no arquivo e não só dentro do escopo do if
    console.log('its january')
} else if(month === 2) {
    console.log('its february')
} else if(month == 3) {
    console.log('its march')
} else {
    console.log('it isnt january, february or march')
}

function verify(){
    if(month === 3) {
        return console.log('ok') // return works just inside function
    }
}
verify()

switch(month) {
    case 1:
        console.log('its january')
        break
    case 2:
        console.log('its february')
        break
    case 3:
        console.log('its march')
        break
    default:
        console.log('it isnt january, february or march')
}