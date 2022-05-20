//Exercício 1: Mudando as cores do semáforo

const semaforo = document.getElementById("img_traffic_light")

function trafficLight(luz){
    if(luz == 'red'){
        semaforo.setAttribute('src', '/img/red_light.png')
    }
    else if (luz == 'yellow'){
        semaforo.setAttribute('src', '/img/yellow_light.png')
    }
    else if ( luz == 'green'){
        semaforo.setAttribute('src', '/img/green_light.png')
    }
    else{
        semaforo.setAttribute('src', '/img/all_off_light.png')
    }
}

//Exercício 2: Convertendo unidade de medida, °C para °F

let resultado = 0;
let valorCelscius = document.getElementById('inputCelcius')
let valorFahrenheit = document.getElementById('inputFahrenheit')

function toFahrenheit(valorFahrenheit){

    resultado = valorCelscius * (9/5) + 32
}

function toCelcius(Fahrenheit){
    resultado = (valorFahrenheit - 32) * 5/9
}