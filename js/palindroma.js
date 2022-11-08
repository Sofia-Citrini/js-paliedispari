const word = prompt('Inserisci una parola');
console.log("parola inserita dall'utente:", word);

const splitWord = word.split('');
console.log(splitWord);

const reverseWord = splitWord.reverse();
console.log(reverseWord);

const invertedWord = reverseWord.join('');
console.log(invertedWord);

function wordPalindrome(parola, parolaInvertita) {
    if (parola === parolaInvertita) {
        console.log('la parola è palindroma');
        return 'la parola è palindroma';
    } else {
        console.log('la parola non è palindroma');
        return 'la parola non è palindroma';
    }
}

wordPalindrome(word, invertedWord);

