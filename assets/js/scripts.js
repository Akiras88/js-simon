/************************************************************************************
 * SIMON SAYS
 * 
 * - An alert exposes 5 random (unique) numbers.
 * - From there starts a 30 second timer.
 * - After 30 seconds the user must enter, 
 * one prompt at a time, the numbers he has previously seen.
 * - After the 5 numbers have been entered, 
 * the software tells how many and which of the numbers to guess have been found
 * 
 ************************************************************************************/

 // 5 random numbers from 1 to 100

var cpuArray = [];
var cpuNumber = [];


while ( cpuArray.length < 5 ) {

    cpuNumber = getRandomNumber (1,100);   

    if ( cpuArray.includes(cpuNumber) == false ) {
        cpuArray.push(cpuNumber);
    }
}

alert('Prova a ricordare questi numeri: ' + cpuArray);

// 30 second timer

var time = 30 * 1000;

setTimeout ( function() {
    alert('Tempo scaduto!');
}, time)











// random number function
function getRandomNumber (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}