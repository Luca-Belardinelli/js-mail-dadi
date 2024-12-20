
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
console.log("un secondo e siamo subito da lei")


// ciclo for

for (let i = 0; i < invitati.length; i++) {

if  (invitati[i] === email){
    
    emailcheck = true;
 }

}


// risultato 

if (emailcheck){

console.log("Prego, si accomodi all'interno, lasci pure la giacca qui")

} else {

    console.log("Ci dispiace ma lei non è presente nella lista degli invitati, è pregato di andarsene subito")
}



