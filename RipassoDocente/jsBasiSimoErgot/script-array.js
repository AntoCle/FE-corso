//ARRAY

const arr = [1, 2, 3];
console.log("tipo array: ", typeof arr);

const arr2 = [
  "ciao", // 0 --> index
  1, // 1
  [], // 2
  {}, // 3
  false, // 4
];
console.log("tipo array2: ", typeof arr2);

// arr2 = []

console.log("valore array2 a indice 4: ", arr2[4]);
console.log("typo del valore array2 a indice 4: ", typeof arr2[4]);

arr2[4] = true; // modifico il valore all'indice 4
console.log("nuovo valore: ", arr2);

const list = ["arance", "mele", "banane", "fragole"];

// metodi e props

console.log("lunghezza di list: ", list.length); // lunghezza dell'array
console.log("tipo della prop length di list: ", typeof list.length); // hce è un number

console.log("tipo di un metodo dell'array: ", typeof list.concat); // function -> metodo

// to string
const stringList = list.toString();
console.log("array in foramto string: ", stringList);

// aggiungi elemento alla fine dell'array
const newLength = list.push("kiwi"); // torna il nuovo length ell'array
// list[4] = 'kiwi'
console.log("new length 1: ", newLength);
const newLength2 = list.unshift("pere");
console.log("new length 2: ", newLength2);

// remove elements from array
// const x = list.pop(); // rimuovi l'ultimo
// console.log(x);
// const x2 = [].pop();
// console.log(x2);
// const x3 = list.splice(2, 2); // rimuove N elementi partendo dall'indice indicato
// console.log(x3);
// const x4 = list.shift(); // rimuove il primo
// console.log(x4);

console.log(list);

// ordinare il contentuto al contrario
list.reverse();
console.log("list: ", list);

// dividere l'array senza modificare l'originale
console.log("sezione di list copiat: ", list.slice(-3));
console.log("list originale: ", list);

// unire 2 array
const list2 = list.concat(["uno", "uno", "uno"]);
console.log("unione di list con array", list2);

// check di un valore dentro l'array
console.log("tre esiste in list2?: ", list2.includes("tre"));

// prendere l'indice di un valore
console.log("primo indice di uno in list2: ", list2.indexOf("uno"));
console.log("ultimo indice di uno in list2: ", list2.lastIndexOf("uno"));

// copy an array
const copy = [...list];
const copy2 = Array.from(list);
const copy3 = list.slice(0);

console.log(copy, copy2, copy3);
