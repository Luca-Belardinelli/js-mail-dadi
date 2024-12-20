// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email


//lista email
const invitati = [
    'mario.rossi87@gmail.com',
    'giulia.verdi.temp@gmail.com',
    'fabio.bianchi89@gmail.com',
    'sara.neri.test@gmail.com',
    'luigi.gialli.user@gmail.com',
    'elena.azzurri2024@gmail.com',
    'maira.bianca@gmail.com'
  ];


//inpunt

//Inserimento email
let email = prompt('inserire la propria email:');


// creo una variabile
let emailcheck = false;


// ciclo for

for (let i = 0; i < invitati.length; i++) {

if  (invitati[i] === email){
    
    emailcheck = true;
 }
}


// risultato 

if (emailcheck){
console.log("entra pure")
} else {
    console.log("vattene subito")
}



