// Celsius to fahrenheit
// C = (F-32) * 5/9
// F = C * 9/5 + 32


let celsius = document.getElementById('fieldCelsius')
let fahrenheit = document.getElementById('fieldFahrenheit')
let span = document.getElementById('span')
let celsiusFocused = false
let fahrenheitFocused = false

let buttonClear = document.getElementById('clear')
buttonClear.addEventListener('click', () => {
    celsius.value = ""
    fahrenheit.value = ""
    span.style.display = 'none'
    document.getElementById('main').style.background = 'rgb(51, 85, 255) radial-gradient(circle, rgba(51, 85, 255, 1) 18%, rgba(247, 86, 16, 1) 62%, rgba(255, 0, 0, 1) 79%)'
    coldFieldsConfig()
})

celsius.addEventListener('focus',() => {
    celsiusFocused = true
    fahrenheitFocused = false
    calculateFahrenheit()
})

fahrenheit.addEventListener('focus',() => {
    fahrenheitFocused = true
    celsiusFocused = false
    calculateCelsius()
} )

document.addEventListener('keydown', (event) => {
    if (event.key == 'Backspace') {
        if(celsiusFocused){
            let str = String(celsius.value)
            str = str.substr(0, str.length - 2)
            celsius.value = str
        }else if(fahrenheitFocused){
            let str = String(fahrenheit.value)
            str = str.substr(0, str.length - 1)
            fahrenheit.value = str
        }
        
    }
})



celsius.addEventListener('input', () => {
    calculateFahrenheit()
})

fahrenheit.addEventListener('input', () => {
    calculateCelsius()
})

function calculateCelsius(){
    try {
        celsius.value = fahrenheitToCelsius(fahrenheit.value)
        verificaTemperatura()
        span.style.display = 'none'
    } catch (e) {
        document.getElementById('main').style.background = 'rgb(51, 85, 255) radial-gradient(circle, rgba(51, 85, 255, 1) 18%, rgba(247, 86, 16, 1) 62%, rgba(255, 0, 0, 1) 79%)'
        span.style.display = 'block'
        span.innerHTML = e
    }
    valorsCorrect()
}

function calculateFahrenheit(){
    try {
        fahrenheit.value = celsiusToFahrenheit(celsius.value)
        verificaTemperatura()
        span.style.display = 'none'
    } catch (e) {
        document.getElementById('main').style.background = 'rgb(51, 85, 255) radial-gradient(circle, rgba(51, 85, 255, 1) 18%, rgba(247, 86, 16, 1) 62%, rgba(255, 0, 0, 1) 79%)'
        span.style.display = 'block'
        span.innerHTML = e
    }
    valorsCorrect()
}

function valorsCorrect() {
    celsius.value = celsius.value.replace('.0', "")
    fahrenheit.value = fahrenheit.value.replace('.0', "")
    if (!celsius.value.includes('ºC')) celsius.value += 'ºC'
    else {
        celsius.value = celsius.value.replace('ºC', '')
        celsius.value += 'ºC'
    }
    if (!fahrenheit.value.includes('F')) fahrenheit.value += 'F'
    else {
        fahrenheit.value = fahrenheit.value.replace('F', '')
        fahrenheit.value += 'F'
    }
}

function celsiusToFahrenheit(celsius) {
    if(celsius.includes('ºC')) celsius = celsius.replace("ºC", "").trim()
    let fahrenheit
    if (isNaN(celsius) || celsius == '') throw 'Impossible calculate fahrenheit'
    else {
        fahrenheit = celsius * 9 / 5 + 32
    }
    return fahrenheit.toFixed(1)
}

function fahrenheitToCelsius(fahrenheit) {
    if(fahrenheit.includes('F')) fahrenheit = fahrenheit.replace("F", "").trim()
    let celsius
    if (isNaN(fahrenheit) || fahrenheit == '') throw 'Impossible calculate celsius'
    else {
        celsius = (fahrenheit - 32) * 5 / 9
    }

    return celsius.toFixed(1)
}

function OnlyCelsius(celsiusString) {
    celsiusString = celsiusString.replace("ºC", "").trim()
    return parseFloat(celsiusString)
}

function OnlyFahrenheit(fahrenheitString) {
    fahrenheitString = fahrenheitString.replace('F', '').trim()
    return parseFloat(fahrenheitString)
}

function coldFieldsConfig() {
    celsius.style.border = '1px solid #15ABFF'
    celsius.style.backgroundColor = '#AFCFFF'
    celsius.style.color = 'rgb(0, 119, 255)'
    fahrenheit.style.border = '1px solid #15ABFF'
    fahrenheit.style.backgroundColor = '#AFCFFF'
    fahrenheit.style.color = 'rgb(0, 119, 255)'
    buttonClear.style.backgroundColor = '#AFCFFF'
    buttonClear.style.border = '1px solid #15ABFF'
    buttonClear.style.color = 'rgb(0, 119, 255)'

}

function hotFieldsConfig() {
    celsius.style.border = '1px solid #FF1515'
    celsius.style.backgroundColor = '#FFD7D7'
    celsius.style.color = '#FF0000'
    fahrenheit.style.border = '1px solid #FF1515'
    fahrenheit.style.backgroundColor = '#FFD7D7'
    fahrenheit.style.color = '#FF0000'
    buttonClear.style.backgroundColor = '#FFD7D7'
    buttonClear.style.border = '1px solid #FF1515'
    buttonClear.style.color = '#FF0000'


}

function verificaTemperatura() {
    const main = document.getElementById('main')
    if (OnlyCelsius(celsius.value) <= 0) {
        main.style.background = 'rgb(51,85,255) radial-gradient(circle, rgba(51,85,255,1) 100%, rgba(235,28,21,1) 100%, rgba(247,86,16,1) 100%)'
        coldFieldsConfig()

    } else if (OnlyCelsius(celsius.value) >= 0.1 && OnlyCelsius(celsius.value) <= 10.0) {
        main.style.background = 'rgb(51,85,255) radial-gradient(circle, rgba(51,85,255,1) 83%, rgba(247,86,16,1) 94%)'
        coldFieldsConfig()
    } else if (OnlyCelsius(celsius.value) >= 10.1 && OnlyCelsius(celsius.value) <= 20.0) {
        main.style.background = ' rgb(51,85,255) radial-gradient(circle, rgba(51,85,255,1) 74%, rgba(247,86,16,1) 93%, rgba(235,28,21,1) 100%)'
        coldFieldsConfig()
    } else if (OnlyCelsius(celsius.value) >= 20.1 && OnlyCelsius(celsius.value) <= 30.0) {
        main.style.background = ' rgb(51,85,255) radial-gradient(circle, rgba(51,85,255,1) 60%, rgba(247,86,16,1) 81%, rgba(235,28,21,1) 100%)'
        coldFieldsConfig()
    } else if (OnlyCelsius(celsius.value) >= 30.1 && OnlyCelsius(celsius.value) <= 40.0) {
        main.style.background = ' rgb(51,85,255) radial-gradient(circle, rgba(51,85,255,1) 50%, rgba(247,86,16,1) 74%, rgba(200,28,21,1) 100%)'
        coldFieldsConfig()
    } else if (OnlyCelsius(celsius.value) >= 40.1 && OnlyCelsius(celsius.value) <= 50.0) {
        main.style.background = 'rgb(51,85,255) radial-gradient(circle, rgba(51,85,255,1) 14%, rgba(247,86,16,1) 43%, rgba(235,28,21,1) 97%)'
        coldFieldsConfig()
    } else if (OnlyCelsius(celsius.value) >= 50.1 && OnlyCelsius(celsius.value) <= 60.0) {
        main.style.background = ' rgb(51,85,255) radial-gradient(circle, rgba(247,86,16,1) 0%, rgba(235,28,21,1) 72%)'
        hotFieldsConfig()
    } else {
        main.style.background = 'rgba(235,28,21,1)'
        hotFieldsConfig()
    }
}


