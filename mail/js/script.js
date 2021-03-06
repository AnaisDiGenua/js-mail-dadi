// Mail : Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi : Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"





// ********ESERCIZIO MAIL********

// input- creo array email e sentinella
const listaEmail = ["mario.rossi@gmail.com", "luigi.verdi@gmail.com", "anais.digenua@gmail.com"];

let sentinella = false;



// operazioni - chiedo all'utente la sua email
let userEmail = prompt('inserisci la tua email per accedere');
document.getElementById('user-email').innerHTML = userEmail


// operazioni - cerco email nell'array con il ciclo for
for (i = 0; i < listaEmail.length && sentinella == false; i++) {
    if (userEmail == listaEmail[i]) {
        sentinella = true;
    } else {
        sentinella = false;
    }
}



// output stampa del messaggio
if (sentinella == true) {
    document.getElementById('user-access').innerHTML = 'consentito'
} else {
    document.getElementById('user-access').innerHTML = 'negato'
}