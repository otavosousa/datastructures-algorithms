let movie = 'Lords of the Ring'
// var movie = 'Batman' error
console.log(movie)

function starWars(){
    const movie = 'Star wars'
    return movie
}
console.log(starWars())

function marvel(){
    movie = 'Avengers'
    return movie
}
console.log(marvel())
console.log(movie)

function blizzard(){

    const isFan = true
    let phrase = 'Warcrat'
    console.log('Before it ' + phrase)

    if(isFan){
        let phrase = 'initial text'
        phrase = 'For the Hotde!'
        console.log('Inside it ' + phrase)
    }

    phrase = 'For the Alliance!'
    console.log('After it ' + phrase)
}
blizzard()

