// Assign a variable

const random = "I am a constant variable.";
let change = "I am a changable variable.";

// Change a variable, only let variable can change and only the value can

change = "See, I changed.";

// Assign existing variable to a new variable

let newchange = change;

// Remind me, what are declare, assign, and define?

/* 
Declare means to establish. like creating the variable name using const or let
Assign is to give a specific value. the variable's value is 3
define 
*/

// What is pseudocoding and why should you do it?

/* 
Pseudocoding is writing out what your code is doing with
if...else statements
*/

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// Create a variable called firstVariable
let firstVariable = "Hello World"; //Assign it the value of the string "Hello World"
// Change the value of this variable to some number
firstVariable = 4;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string
secondVariable = "Boo!";
// What is the value of firstVariable?
// console.log(firstVariable);
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
const yourName = "Essence";
// console.log("Hello, my name is " + yourName + ".");

// BOOLEANS
/*
Using the provided variable definitions,
replace the blanks so that all log statements print truein the console. 
Answers should be all be valid JS syntax 
and not weird things that don't make sense but happen to print trueto the console
*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

// console.log(a + b);
// console.log(c - d);
// console.log("Name" + "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false && false);
// console.log(e === "Kevin");
// console.log(a + b * c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log((a / a) * d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== "48");

// The Farm

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "pig";
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "pig") {
  //   console.log("oink oink");
} else {
  //Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
  //   console.log("Hey! You're not a cow");
}

// Make a variable that holds a person's age; be semantic
let age = 26;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (age >= 16) {
  //   console.log("Here are the keys!");
} else {
  //   console.log("Sorry, you're too young");
}

// LOOPS

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

//Write a loop that will print out all the numbers from 10 up to and including 400

for (let i = 10; i <= 400; i++) {}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 12; i <= 4000; i += 3) {}

// Print out the numbers that are within the range of 1 - 100

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log(`${i} <-- is an even number");
  } else {
    //   console.log(i)
  }
}

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    // console.log(`I found a ${i}, High five!`);
  }
  if (i % 3 === 0) {
    //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
    // console.log(`I found a ${i}. Three is a crowd.`);
  } else {
    // console.log(i);
  }
}

let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account = bank_account += i;
}
// console.log(bank_account);

// Arrays

/*
What are the things in an array called?
    elements
Do Arrays guarantee those things will be in order?
    yes becase they have indexes
What real-life thing could you model with an array?
    lists, like to-do or grocery lists
*/
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = [
  "Que sera sera",
  "The best time is now",
  "Tomorrow is never promised",
];

const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]);
randomThings[2] = "World";
// console.log(randomThings);

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
// console.log(ourClass);

const myArray = [5, 10, 500, 20];
// console.log(myArray);
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Witch");
// console.log(myArray);
// Remove the 5 from the beginning of the array.
myArray.shift();
// console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
// console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop();
// console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
// console.log(myArray);

/*
Create a variable that contains an integer.

Write an if ... elsestatement that:

1. console.log()s "little number" if the number is entered is less than 100
2. console.log()s big numberif the number is greater than or equal to 100.
*/
let num = 100;

if (num < 100) {
  //   console.log("little number");
} else {
  //   console.log("big number");
}

/*
Write an if ... else if ... else statement:

1. console.log()little number if the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey".
*/

let newNum = 9;

if (newNum < 5) {
  //   console.log("little number");
} else if (newNum > 10) {
  //   console.log("big number");
} else {
  //   console.log("monkey");
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
console.log(kristynsCloset[2]);

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is looking spiffy in his ${thomsCloset[0][2]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}!`
);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// ====== FUNCTIONS =========

// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
function printGreeting(name) {
  return "Hello there, " + name + "!";
}

console.log(printGreeting("Bud"));

// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
  return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));

// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
let cube = function (x) {
  return x * x * x;
};
console.log(cube(5));

/* Write a function isVowelthat takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, false otherwise. 
The vowel could be upper or lower case. 
Test your function on every vowel and make sure it's working. 
In general, when you write functions, take a minute to test them 
with different values to make sure they behave the way you want.
*/
let isVowel = function (char) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (char === vowels) {
    return true;
  } else {
    return false;
  }
};
console.log(isVowel("B"));

/* Write a function getTwoLengths that accepts two parameters (strings). 
The function should return an array of numbers where each number is the length of the corresponding string.
*/

const getTwoLengths = (arr, str) => {
  return [arr.length, str.length];
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

/* Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string.
*/
function getMultipleLengths(arr) {
  return arr.map(function (str) {
    return str.length;
  });
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
let maxOfThree = function (a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else if (c >= a && c >= b) {
    return c;
  }
};
console.log(maxOfThree(6, 9, 1));

/* Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. 
In case of a tie, the method should return the word that appears first in the array.
*/

let printLongestWord = (str) => {
  let longestWord = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length) {
      longestWord = str[i];
    }
  }
  return longestWord;
};
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);
// ======= OBJECTS =======
/* Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. 
Set the value of purchasedto an empty array []. 
Set the other values to whatever you would like.
*/
const user = {
  name: "Reba",
  email: "coder@aol.com",
  age: 27,
  purchased: [],
};
// console.log(user);

/* Our user has changed his or her email address. 
Without changing the original user object, 
update the email value to a new email address.
Our user has had a birthday! Without changing the original user object, 
increment the age value using the postfix operator. Hint: age++
*/

user.email = "luckycoder@aol.com";
user.age++;
// console.log(user);

/* You have decided to add your user's location to the data that you want to collect.
Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
*/
user.location = "Bali";
// console.log(user);

/* 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
4. Console.log just the "Merino jodhpurs" from the purchased array.
*/

user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
// console.log(user.purchased[2]);

user.friend = {
  name: "Viola Davis",
  age: 57,
  location: "Orlando, Fl",
  purchased: [],
};
// console.log(user.friend.name);
// console.log(user.friend.location);

/* 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
2. Console.log just the friend's name
3. Console.log just the friend's location
4.CHANGE the friend's age to 55
5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
7. Console.log just "A latte" from the friend's purchased array.
*/

user.friend.age = 55;
user.friend.purchased.push("The One Ring", "A latte");
// console.log(user.friend.age);
// console.log(user.friend.purchased[1]);

/* 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
*/

for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

/* 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
2. it should increment the user's age by 1
3. make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.

4. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
*/

function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
  return person;
}
oldAndLoud(user);
console.log(oldAndLoud(user));
