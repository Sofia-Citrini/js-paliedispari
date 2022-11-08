const userChoice = prompt('scegli: PARI o DISPARI');
const userChoiceNum = parseInt(prompt('scegli un numero tra 1 e 5'));

if (isNaN(userChoiceNum)) {
    alert("Numero inserito non valido");
}

console.log('Scelta Utente:', userChoice);
console.log('Numero Utente:', userChoiceNum);

// generatore numero random
function getRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

// somma dei due numeri 
const minNum = 1;
const maxNum = 5;
const randomNumComputer = getRandomNumber (minNum, maxNum);

const somma = userChoiceNum + randomNumComputer;
console.log('Somma dei 2 numeri:', somma);

//pari o dispari 
const risultato = getPariDispari(somma);

function getPariDispari (sommaNum) {
    if (sommaNum % 2 === 0) {
        console.log('numero pari');
        return'pari';
    } else {
        console.log('numero dispari');
        return'dispari';
    }
}

//vincitore 
if (risultato === userChoice){
    console.log('utente ha vinto');
} else {
    console.log('computer ha vinto');
}

