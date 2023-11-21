// Creazione di un array monodimensionale
let fruits = ["apple", "banana", "orange", "grape"];


// Accesso, modifica e cancellazione dei valori in un array
console.log(fruits[0]); // Output: "apple"
fruits[1] = "pear";
console.log(fruits); // Output: ["apple", "pear", "orange", "grape"]
fruits.splice(2, 1); // Rimuove l'elemento "orange"
console.log(fruits); // Output: ["apple", "pear", "grape"]


// Concatenazione di array
let vegetables = ["carrot", "broccoli"];
let combinedArray = fruits.concat(vegetables);
console.log(combinedArray); // Output: ["apple", "pear", "grape", "carrot", "broccoli"]


// Utilizzo dei metodi pop(), shift(), e splice()
fruits.pop(); // Rimuove l'ultimo elemento "grape"
console.log(fruits); // Output: ["apple", "pear"]

fruits.shift(); // Rimuove il primo elemento "apple"
console.log(fruits); // Output: ["pear"]

fruits.splice(0, 1, "kiwi"); // Sostituisce "pear" con "kiwi"
console.log(fruits); // Output: ["kiwi"]


// Trovare elementi in un array
let index = fruits.indexOf("kiwi");
console.log(index); // Output: 0 (indice dell'elemento "kiwi" nell'array)


// Ordinamento dell'array
fruits.push("orange", "apple");
fruits.sort();
console.log(fruits); // Output: ["apple", "apple", "kiwi", "orange"]


// Creazione di un array bidimensionale e accesso agli elementi
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


console.log(matrix[0][1]); // Output: 2 (elemento alla riga 0 e colonna 1)

// Stampa degli elementi di un array bidimensionale
for (let row of matrix) {
  for (let element of row) {
    console.log(element);
  }
}



// Creazione di un oggetto
let person = {
    name: "John",
    age: 30,
    city: "New York",
    isAdmin: false,
    hobbies: ["reading", "running", "cooking"],
    address: {
      street: "123 Main St",
      zipCode: "10001",
    },
  };



// Accesso, modifica e cancellazione dei valori in un oggetto
console.log(person.name); // Output: "John"
person.age = 35;
console.log(person); // Output: { name: "John", age: 35, city: "New York", isAdmin: false, hobbies: ["reading", "running", "cooking"], address: { street: "123 Main St", zipCode: "10001" } }
delete person.isAdmin;
console.log(person); // Output: { name: "John", age: 35, city: "New York", hobbies: ["reading", "running", "cooking"], address: { street: "123 Main St", zipCode: "10001" } }

// Aggiunta di nuove proprietà all'oggetto
person.gender = "male";
console.log(person); 

// Iterazione sugli oggetti
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Verifica se una proprietà esiste in un oggetto
console.log("gender" in person); // Output: true
console.log("email" in person); // Output: false

// Copia di un oggetto
let personCopy = { ...person };
console.log(personCopy);

// Merge di due oggetti
let additionalInfo = {
  email: "john@example.com",
  phone: "123-456-7890",
};

let mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);