
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



