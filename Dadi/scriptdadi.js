// GIOCO DEI DAI

// CREO DUE VARIABILI

let utente;
let cpu;

// GENERO DUE NUMERI CASUALI AI GIOCATORI

 utente = Math.floor(Math.random() * 6 ) +1;
 cpu = Math.floor(Math.random() * 6 ) +1;

console.log (" utente",  utente, "cpu",  cpu);


// CONFRONTO I DUE NUMERI
// SE VINCE L'UTENTE 
if (utente > cpu) {

    console.log ("hai vinto")

// SE VINCE LA CPU
}else if (cpu > utente){

    console.log ("ritenta sarai più fortunato")


// SE è PAREGGIO
}else{

    console.log ( "Pareggio!")


}
