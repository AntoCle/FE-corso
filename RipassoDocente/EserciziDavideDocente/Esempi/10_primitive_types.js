// String type
let stringa = "Questo è un esempio di stringa";

/**
 * Tipo numerico. 
 * 
 * I numeri JavaScript sono rappresentati come valori a virgola mobile a 64 bit. uando viene dichiarata una variabile di tipo Number e viene assegnato un valore numerico, viene allocata una quantità fissa di memoria per memorizzare quel numero. La dimensione di memoria allocata per un numero JavaScript è fissa e non dipende dalla grandezza del numero stesso
 */
let intero = 10;
let decimale = 3.14;

// Bigint 
let bigNumber = 1234567890123456789012345678901234567890n;

// Boolean 
let vero = true;
let falso = false;

// Null
let null_value = null;

// Undefined:
let und_value = undefined; 

// Symbol 
let symbol1 = Symbol("New symbol"); 
let symbol2 = Symbol("New symbol"); 

console.log(symbol1 === symbol2); 


let numero = 42;
let testo = "Ciao, mondo!";
let booleano = true;
let array = [1, 2, 3];
let oggetto = { nome: "Alice", età: 30 };
let funzione = function() { console.log("Questa è una funzione."); };

console.log(typeof numero); // "number"
console.log(typeof testo);  // "string"
console.log(typeof booleano); // "boolean"
console.log(typeof array);   // "object" (nota che array è un tipo di oggetto)
console.log(typeof oggetto); // "object"
console.log(typeof funzione); // "function"
