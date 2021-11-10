// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?






// generaro un numero random
let utenteScore = Math.floor(Math.random() * 6) + 1;
let computerScore = Math.floor(Math.random() * 6) + 1;



// generaro evento con button
document.getElementById('btn').addEventListener("click", 

    function() {
    document.querySelector('.numero-utente').innerHTML += utenteScore
    document.querySelector('.numero-computer').innerHTML += computerScore
    
});


// stabilisco il vincitore
if (utenteScore > computerScore) {
    console.log('hai vinto!');
} else if (utenteScore == computerScore) {
    console.log('pareggio');
} else {
    console.log('hai perso');
}

