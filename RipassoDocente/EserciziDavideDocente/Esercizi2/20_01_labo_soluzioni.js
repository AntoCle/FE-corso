// Exercise 10_02_01.00
// let shoppingList = ["Milk", "Bread", "Apples"];
// console.log("list length:", shoppingList.length);
// shoppingList[1] = "Bananas";
// console.log("Shopping List:", shoppingList);

// Exercise 10_02_01.10
/* let shoppingList = [];
shoppingList.push("Milk", "Bread", "Apples");
shoppingList.splice(1, 1, "Bananas", "Eggs");

let lastItem = shoppingList.pop();
console.log("Removed item:", lastItem);

shoppingList.sort();
console.log(shoppingList);

let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of 'Milk' is:", milkIndex);

shoppingList.splice(milkIndex + 1, 0, "Carrots", "Lettuce");

let newList = ["Juice", "Pop"];

shoppingList = shoppingList.concat(newList, newList);

let lastPopIndex = shoppingList.lastIndexOf("Pop");
console.log("Last index of 'Pop' is:", lastPopIndex);

console.log(shoppingList); */

// Exercise 10_02_01.20
/* let originalArray = [1, 2, 3];
let newArray = [originalArray, originalArray, originalArray];
console.log(newArray[1][1]); */

// Exercise 10_02_01.30
/* let myCar = {
    make: "Peugeot",
    model: "208",
} */

/*
// FUORI ESERCIZIO: for... in, for... of

let properties = ['color', 'year', 'maxSpeed'];

for (index in properties) {
    console.log(index);
}

for (value of properties) {
    console.log(value);
}

*/

/* let propertyName = 'color';
myCar[propertyName] = "black";

propertyName = 'forSale';
myCar[propertyName] = true;

console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
console.log("Color:", myCar.color);
console.log("For Sale?:", myCar.forSale) */

// Exercise 10_02_01.40
/* let people = {
    friends: []
};

let friend1 = {
    firstName: "Mario",
    lastName: "Rossi",
    id: 1
}

let friend2 = {
    firstName: "Giovanni",
    lastName: "Bianchi",
    id: 2
}

let friend3 = {
    firstName: "Matteo",
    lastName: "Verdi",
    id: 3
}

people.friends.push(friend1, friend2, friend3);
console.log("Friends:", people.friends); */

// Exercise 10_02_01_50
/* const theList = [
    'Laurence',
    'Svekis',
    true,
    35,
    null,
    undefined,
    {
        test: 'one',
        score: 55
    },
    ['one', 'two']
];

theList.shift();
theList.pop();

theList.unshift("FIRST");

theList[2] = "MIDDLE";
theList[3] = "hello World";

theList.push("LAST");
theList.splice(4, 3);

console.log(theList);
 */
//["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// Exercise 10_02_01_60
/* let inventory = [];

let item1 = {
    name: "Laptop",
    model: "Macbook Pro",
    cost: 2599,
    quantity: 5
}

let item2 = {
    name: "Smartphone",
    model: "iPhone 15 Pro Max",
    cost: 1599,
    quantity: 10
}

let item3 = {
    name: "Tablet",
    model: "iPad Air",
    cost: 599,
    quantity: 8
}

inventory.push(item1, item2, item3);
console.log("Inventory:", inventory);
console.log("Quantity of item3", inventory[2].quantity); */