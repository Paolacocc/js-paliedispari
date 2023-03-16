//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord = prompt("Dimmi una parola palindroma");



let reverseWord = "";
for (let i = userWord.length - 1; i >= 0; i--) {
    
    reverseWord += userWord[i];
}
console.log(reverseWord);

function opposite(word1, word2) {
    let result;
    if (word1 === word2) {
        result = "esatto";

    } else {
        result = "riprova";

    }
    return result;
    
}

const genaratedWord = opposite(userWord, reverseWord);

console.log(genaratedWord);