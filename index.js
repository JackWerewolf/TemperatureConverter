// fahrenheith to celcious
let fahrenheith1 = document.getElementById('fahrenheith1');
let boton1 = document.getElementById('boton1')
let toCelcious = document.getElementById('toCelcious');
let gradosF = ' °F';
let gradosC = ' °C';
let gradosK = ' °K';

function fahrenheithToCelcious(){
    toCelcious.innerHTML = (fahrenheith1.value - 32) *  5 / 9 + gradosC;
    return toCelcious;
}

boton1.addEventListener('click', fahrenheithToCelcious);


// celcious to fahrenheith
let celcious1 = document.getElementById('celcious1');
let boton2 = document.getElementById('boton2')
let tofahrenheith = document.getElementById('tofahrenheith');


function celciousToFahrenheith(){
    tofahrenheith.innerHTML = (celcious1.value * 9 / 5) + 32 + gradosF;
    return tofahrenheith;
}

boton2.addEventListener('click', celciousToFahrenheith);


// fahrenheith to kelvin
let fahrenheith2 = document.getElementById('fahrenheith2');
let fToKelvin = document.getElementById('fToKelvin');
let boton3 = document.getElementById('boton3');


function fahrenheithToKelvin(){
    fToKelvin.innerHTML = (fahrenheith2.value - 32) * 5 / 9 + 273.15 + gradosK;
    return fToKelvin;
}

boton3.addEventListener('click', fahrenheithToKelvin);




// celcious to kelvin
let celcious2 = document.getElementById('celcious2');
let cToKelvin = document.getElementById('cToKelvin');
let boton4 = document.getElementById('boton4');


function celciousToKelvin(){
    cToKelvin.innerHTML = Number(celcious2.value) + 273.15 + gradosK;
    return fToKelvin;
}
boton4.addEventListener('click', celciousToKelvin); 