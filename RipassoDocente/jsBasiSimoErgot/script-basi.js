console.log("le basi del js");

let variabile1 = "hello world"; // variabile1 è una stringa graie al suo valore
let numero = 1; // tipo numero

const x = "ciao";
// x = "hello"; // non si può fare

// TIPI PRIMITIVI
/**
 * string
 * number
 * null
 * undefined
 * boolean
 * Symbol
 */

// OBJECT TYPE
/**
 * object
 * array
 * function
 */

// SYMBOL
let sym1 = Symbol("hello");
let sym2 = Symbol("hello");
// console.log(sym1);
// console.log(sym2);
// console.log(sym1 == sym2);
// console.log(typeof sym1);

// UNDEFINED -> variabile vuota
let vuoto;
console.log("vuoto: ", vuoto);
console.log("tipo vuoto: ", typeof vuoto);
let vuoto2 = "vuoto";
vuoto2 = undefined;
console.log("vuoto2: ", vuoto2);

// NULL -> la varibale ha valore ma nullo
let nullo = null;
console.log("nullo: ", nullo);
console.log("tipo di nullo: ", typeof nullo);

// BOOLEAN
let bool = true;
console.log("bool: ", bool);
console.log("tipo di bool: ", typeof bool);

// STRING
let parola = "ciao";
console.log("parola: ", parola);
console.log("tipo di parola: ", typeof parola);

// NUMBER
let num = 1;
let num2 = 1.1;
console.log("num: ", num);
console.log("tipo di num: ", typeof num);
console.log("tipo di num2: ", typeof num2);

// OPERATORI

// assegnamento "="

// comparazione ==, ===, <, <=, >, >=, !=, !== (tornano un valore boolean)

const uguali = "ciao" == "ciao";
console.log("uguali: ", uguali);
const diversi = "ciao" == "ciao2";
console.log("diversi: ", diversi);
const x1 = 12 == "12";
console.log("x1: ", x1);
const x2 = 12 === "12";
console.log("x2: ", x2);
const maggiore = 10 > 5;
console.log("maggiore: ", maggiore);
const minore = 10 < 5;
console.log("minore: ", minore);

// aritmetici +. -, *, /, %, **

const somma = 4 + 6;
const sottrazione = 10 - 6;
const moltiplicazione = 10 * 3;
const divisione = 10 / 2;
const resto = 10 % 3;
const potenza = 8 ** 3;
console.log("somma: ", somma);
console.log("sottrazione: ", sottrazione);
console.log("moltiplicazione: ", moltiplicazione);
console.log("divisione: ", divisione);
console.log("resto: ", resto);
console.log("potenza: ", potenza);

// LOGICI && (and), || (or), ! (not)

const and1 = true && true;
const and2 = true && false;
const and3 = false && false;
const and4 = true && true && false;
console.log(and1, and2, and3, and4);

const or1 = true || true;
const or2 = true || false;
const or3 = false || false;
console.log(or1, or2, or3);

const not1 = !true;
const not2 = !false;
console.log(not1, not2);

const y1 = (true && !false) || true;
console.log("y1: ", y1);

const y2 = and1 && not2;
console.log("y2: ", y2);

// opreatori su stringhe
const str1 = "ciao" + " " + "mondo";
console.log("str1: ", str1);
const str2 = "ciao " + 12;
console.log("str2: ", str2);
const str3 = 12 + "12";
console.log("str3: ", str3);

// CICLI -----------

// while, do-white, for

// white controlla da subito se entrare
let numero1 = 1;
while (numero1 <= 10) {
  console.log("numero1: ", numero1);
  // numero1 = numero1 + 1
  numero1++;
}
console.log("fine while");

// do-while -> fa il primo giro sempre perché il controllo è alla fine
let numero2 = 1;
do {
  console.log("numero2: ", numero2);
  numero2++;
} while (numero2 <= 10);
console.log("fine do-while");

// for controlla da subito se entrare
for (let i = 1; i <= 10; i++) {
  console.log("i: ", i);
}
console.log("fine for");

// condition

// if
let check = true;
if (check) {
  console.log("fatto");
} else {
  console.log("non fatto");
}

let action = 1; // 1, 2, 3
if (action === 1) {
  console.log("action 1");
} else if (action === 2) {
  console.log("action 2");
} else if (action === 3) {
  console.log("action 3");
} else {
  console.log("action non trovata");
}
// if (action === 1 || action === 2) {
//   console.log("action 2");
// } else if (action === 3) {
//   console.log("action 3");
// } else {
//   console.log("action non trovata");
// }

// switch
switch (action) {
  case 1:
  case 2:
    console.log("action 2");
    break;
  case 3:
    console.log("action 3");
    break;

  default:
    console.log("action non trovata");
    break;
}

// switch con condizioni
switch (true) {
  case action <= 2:
    console.log("action 2");
    break;
  case action === 3:
    console.log("action 3");
    break;

  default:
    console.log("action non trovata");
    break;
}
