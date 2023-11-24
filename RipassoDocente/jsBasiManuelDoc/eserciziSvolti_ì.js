/* 



## 1. Area and Perimeter Calculator________________________________

- Create a function `calculateArea` that calculates and returns the area of a rectangle. The function takes two parameters: base and height.
- Create a function `calculatePerimeter` that calculates and returns the perimeter of a rectangle. The function takes two parameters: base and height.
- Use both functions to calculate and log the area and perimeter of a rectangle with a base of 5 and height of 8.




*/
/* 

let altezzaRettangolo = 8;
let baseRettangolo = 5;

function calculateArea(base, height) {
  let rectangleArea = base * height;
  return rectangleArea;
}

function calculatePerimeter(base, height) {
  let rectanglePerimeter = base * 2 + height * 2;
  return rectanglePerimeter;
}

console.log(
  "L'area del rettangolo è:  " +
    calculateArea(baseRettangolo, altezzaRettangolo)
);
console.log(
  "Il perimetro del rettangolo è: " +
    calculatePerimeter(baseRettangolo, altezzaRettangolo)
); 


*/

/*



## 2. Manipulating Arrays of Strings__________________________________________

- Create an array of strings called `names`.
- Write a function called `nameLengths` that takes an array of strings and returns a new array containing the length of each name.
- Log the array of name lengths using the function. 

*/
/* 
let names = ["Giorgio", "Andrea", "Fabrizio"];
let newArray = [];

function nameLengths(arrayNomi) {
  for (let i = 0; i < arrayNomi.length; i++) {
    const singleNameLength = arrayNomi[i].length;
    newArray.push(singleNameLength);
    console.log(newArray);
  }
}

nameLengths(names);
console.log(newArray); */

/*


## 3. Shopping Cart Management__________________________________________

- Create an object `cart` representing a shopping cart. The object should have a prop to hold the array of items and a method `addProduct` that accepts a product name and adds it to the array.
- Add to the object a method `calculateTotal` that calculates and returns the total number of items in the cart.
- Add some products to the cart and log the total. */

/* let cart = {
  products: [],
  addProducts: function (...oggetto) {
    this.products.push(...oggetto);
    // this.products = this.products.concat(oggetto);
  },

  calculateTotal: function () {
    let totalProducts = this.products.length;
    return totalProducts;
  },
};

cart.addProducts("Orologio Costoso", "Orologio Tarocco", "Pere");
console.log(cart);
console.log("Il totale dei prodotti nel carrello è: " + cart.calculateTotal()); 


GG

*/

/* 


## 4. Word Count in a Sentence_____________________________

- Write a function called `countWords` that takes a sentence and returns the number of words in the sentence.
- Call the function to count the words in an example sentence. */

/* function countWords(frase) {
  let splittare = frase.split(" ");
  console.log(splittare);
  console.log("Ci sono " + frase.split(" ").length + " parole.");
  return frase.split(" ").length;
}

let conta = countWords("Ciao sono Vittorio e sto provando a non far schifo.");
console.log(conta); 




*/

/* 


## 5. String Reversal

- Write a function called `reverseString` that takes a string and returns the reversed string.
- Call the function to reverse an example string. */

function reverseString(parola) {
  let splittedWord = parola.toLowerCase().split("");
  let reversedWord = splittedWord.reverse().join("");

  console.log(reversedWord);
  return reversedWord;
}
reverseString("Massimo");

/*



## 6. Filter Even Numbers

- Create an array of numbers.
- Write a function called `filterEvenNumbers` that returns a new array containing only the even numbers from the original array.
- Log the filtered array using the function. */
