// const word = prompt('Inserisci una parola');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function() {
    const risultatoEl = document.getElementById('risultato');
    const wordEl = document.querySelector( "[name='userWord']" );
    console.log('parola inserita:', wordEl.value);

    const splitWord = wordEl.value.split('');
    console.log(splitWord);

    const reverseWord = splitWord.reverse();
    console.log(reverseWord);

    const invertedWord = reverseWord.join('');
    console.log('parola invertita:', invertedWord);
    
    const result = wordPalindroma(wordEl.value, invertedWord);
    console.log(result);

    risultatoEl.innerHTML = result;

    function wordPalindroma(parola, parolaInvertita) {
        let color = '';
    
        if (parola === parolaInvertita) {
            color = 'text-primary'
            risultatoEl.classList.add(color);
            return 'La parola è palindroma';
        } else {
            color = 'text-danger'
            risultatoEl.classList.add(color);
            return 'La parola non è palindroma';
        }
    }
})



