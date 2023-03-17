// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Pari o dispari?");
console.log(userChoice);
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5")) ;
console.log(userNumber);

const computerNumber = getRandom(0, 5);
console.log(computerNumber);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }


//sommo 
let sumNumbers = userNumber + computerNumber;


const finalresult = oddOrEven(sumNumbers);
console.log(sumNumbers);

if (finalresult === userChoice) {
    console.log("Hai vinto!");
} else {
    console.log("Riprova");
}
//function stabilire se la somma e' pari o dispari

function oddOrEven(ResultNum) {

let result;
    if (ResultNum % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari"
    }
    return result; 
}