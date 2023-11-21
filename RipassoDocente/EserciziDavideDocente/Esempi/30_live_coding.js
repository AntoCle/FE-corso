// Conditional branches
let time = 15;

if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}



let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's cool outside.");
}


let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the workweek.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Middle of the workweek.");
    break;
  case "Friday":
    console.log("End of the workweek.");
    break;
  default:
    console.log("Weekend!");
}





// While loop:
let fruits = ["apple", "banana", "orange"];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}



// Do-while loop:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);



// For loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}




// For-in loop (per oggetti):
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
  
for (let key in person) {
    console.log(key + ": " + person[key]);
}

let person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "running", "cooking"]
  };
  
  for (let key in person) {
    if (Array.isArray(person[key])) {
      for (let hobby of person[key]) {
        console.log(hobby);
      }
    } else {
      console.log(person[key]);
    }
  }


// For-of loop (per array):
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

let person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (let value of Object.values(person)) {
    console.log(value);
  }




