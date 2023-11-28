// Exercise 1: Area and Perimeter Calculator
function calculateArea(base, height) {
    return base * height;
}

function calculatePerimeter(base, height) {
    return 2 * (base + height);
}

let rectangleBase = 5;
let rectangleHeight = 8;

let area = calculateArea(rectangleBase, rectangleHeight);
let perimeter = calculatePerimeter(rectangleBase, rectangleHeight);

console.log("Rectangle area: " + area);
console.log("Rectangle perimeter: " + perimeter);

// Exercise 2: Manipulating Arrays of Strings
let names = ["Alice", "Bob", "Charlie"];

function nameLengths(arrayNames) {
    return arrayNames.map(name => name.length);
}

let lengths = nameLengths(names);
console.log("Name lengths: " + lengths);

// Exercise 3: Shopping Cart Management
let cart = {
    items: [],
    addProduct: function (productName) {
        this.items.push(productName);
    },
    calculateTotal: function () {
        return this.items.length;
    }
};

cart.addProduct("Apple");
cart.addProduct("Bread");
cart.addProduct("Milk");

let totalCartItems = cart.calculateTotal();
console.log("Total items in the cart: " + totalCartItems);

// Exercise 4: Word Count in a Sentence
function countWords(sentence) {
    return sentence.split(" ").length;
}

let sampleSentence = "This is an example sentence.";
let wordCount = countWords(sampleSentence);
console.log("The sentence contains " + wordCount + " words.");

// Exercise 5: String Reversal
function reverseString(string) {
    return string.split("").reverse().join("");
}

let exampleString = "Hello, world!";
let reversedString = reverseString(exampleString);
console.log("Reversed string: " + reversedString);

// Exercise 6: Filter Even Numbers
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(arrayNumbers) {
    return arrayNumbers.filter(number => number % 2 === 0);
}

let evenNumbers = filterEvenNumbers(numbersArray);
console.log("Even numbers: " + evenNumbers);

// Exercise 7: Check for Anagrams
function areAnagrams(word1, word2) {
    return word1.split("").sort().join("") === word2.split("").sort().join("");
}

let wordA = "listen";
let wordB = "silent";
console.log(wordA + " and " + wordB + " are anagrams? " + areAnagrams(wordA, wordB));

// Exercise 8: Currency Converter
function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
}

let dollarsAmount = 100;
let euroDollarRate = 0.85;
let euroAmount = convertCurrency(dollarsAmount, euroDollarRate);
console.log("Amount in euros: " + euroAmount.toFixed(2));

// Exercise 9: Age Calculator
function calculateAge(birthYear) {
    let currentYear = 2023;
    return currentYear - birthYear;
}

let birthYear = 1990;
let personAge = calculateAge(birthYear);
console.log("Age: " + personAge);

// Exercise 10: Dice Game
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let diceResults = [];
for (let i = 0; i < 5; i++) {
    diceResults.push(rollDice());
}

console.log("Dice results: " + diceResults);

// Exercise 11: Temperature Converter
function convertCelsiusToFahrenheit(temperatureCelsius) {
    return (temperatureCelsius * 9 / 5) + 32;
}

let temperatureCelsius = 25;
let temperatureFahrenheit = convertCelsiusToFahrenheit(temperatureCelsius);
console.log("Temperature in Fahrenheit: " + temperatureFahrenheit.toFixed(2));

// Exercise 12: Book Registry
let book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    displayInfo: function () {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`);
    }
};

// Exercise 13: Shopping List
let shoppingList = {
    items: [],
    addItem: function (item) {
        this.items.push(item);
    },
    removeItem: function (item) {
        let index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
};

shoppingList.addItem('Pizza')
shoppingList.addItem('Pasta')
shoppingList.removeItem('Pizza')

console.log(shoppingList.items.length, shoppingList.items);

// Exercise 14: Budget Calculator
let budgetCalculator = {
    income: 0,
    expenses: 0,
    addIncome: function (amount) {
        this.income += amount;
    },
    addExpense: function (amount) {
        this.expenses += amount;
    },
    displayResume: function () {
        console.log(`Income: ${this.income}, Expenses ${this.expenses}`);
    }
};

// Exercise 15: Music Playlist
// Function to create a song object
function createSong(title, artist, duration) {
    return {
        title: title,
        artist: artist,
        duration: duration,
        displayInfo: function () {
            console.log(`${this.title} by ${this.artist} (${this.duration} seconds)`);
        }
    };
}

// Function to create a playlist object
function createPlaylist(name) {
    return {
        name: name,
        songs: [],
        addSong: function (song) {
            if (typeof song === 'object' && song.hasOwnProperty('title') && song.hasOwnProperty('artist') && song.hasOwnProperty('duration')) {
                this.songs.push(song);
                console.log(`Added ${song.title} to the playlist.`);
            } else {
                console.log("Invalid song object. Please provide a valid song object.");
            }
        },
        removeSong: function (song) {
            const index = this.songs.indexOf(song);
            if (index !== -1) {
                this.songs.splice(index, 1);
                console.log(`Removed ${song.title} from the playlist.`);
            } else {
                console.log(`${song.title} is not in the playlist.`);
            }
        },
        displayPlaylist: function () {
            console.log(`Playlist: ${this.name}`);
            if (this.songs.length === 0) {
                console.log("The playlist is empty.");
            } else {
                console.log("Songs in the playlist:");
                this.songs.forEach(function (song) {
                    song.displayInfo();
                });
            }
        }
    };
}

// Creazione di alcune canzoni
const song1 = createSong("Song 1", "Artist 1", 180);
const song2 = createSong("Song 2", "Artist 2", 240);
const song3 = createSong("Song 3", "Artist 3", 200);

// Creazione di una playlist
const myPlaylist = createPlaylist("My Playlist");

// Aggiunta di canzoni alla playlist
myPlaylist.addSong(song1);
myPlaylist.addSong(song2);
myPlaylist.addSong(song3);

// Visualizzazione della playlist
myPlaylist.displayPlaylist();

// Exercise 16: Calories Calculator
let caloriesCalculator = {
    lunch: [],
    dinner: [],
    addFood: function (food, meal) {
        this[meal].push(food);
    },
    calculateDailyCalories: function () {
        let totalCalories = 0;
        for (let { calories } of this.lunch) {
            totalCalories += calories;
        }
        for (let { calories } of this.dinner) {
            totalCalories += calories;
        }
        return totalCalories;
    }
};

let food1 = {
    name: 'Pizza',
    calories: 1000
}

let food2 = {
    name: 'Pasta',
    calories: 800
}

caloriesCalculator.addFood(food1, 'lunch');
caloriesCalculator.addFood(food2, 'lunch');
caloriesCalculator.addFood(food2, 'dinner');
console.log(caloriesCalculator.calculateDailyCalories());