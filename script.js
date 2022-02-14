// PI
Math.PI;

// Adding
console.log("[*] Adding example:");
console.log(2+2);

// Strings
console.log("\n[*] Strings example:");
let dogSentence = "dogs are the bane of my existence";
console.log(dogSentence)

// String replacing
console.log("\n[*] String replacing example:");
console.log(dogSentence.replace("dogs", "lions"));

// Standard library

// Third-party javascript
// Imported in index.html

// Functions

console.log("\n[*] Function examples:");
function makeMoreExciting(s) {
  return s + '!!!!!'
}

let sentence = "time for a nap"
console.log(makeMoreExciting(sentence));

function yellIt(s) {
  s = s.toUpperCase();
  s = makeMoreExciting(s);
  return s;
}

sentence = "i fear no human";
console.log(yellIt(sentence));

// Loops and arrays
console.log("\n[*] Loop using underscore:");
function logANumber(n) {
  console.log(n)
}
_.times(10, logANumber);

let zeroThroughTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("\n[*] Foreach with lambda (kinda flexing lol):");
zeroThroughTen.forEach(n => console.log(n));

console.log("\n[*] For loop with index and increments:");
for(let i = 0; i < zeroThroughTen.length; i++) {
  console.log(zeroThroughTen[i])
}

let myCatFriends = ["bill", "tabby", "ceiling"];

console.log("\n[*] Array example displaying first element:");
console.log(myCatFriends[0]);

console.log("\n[*] Pushing element into array and displaying it:");
myCatFriends.push("super hip cat");

console.log(myCatFriends[myCatFriends.length - 1]);

console.log("\n[*] Displaying two arrays elements with the same index:");
let lastNames = ["the cat", "cat", "cat"];
let addresses = ["The Alley", "Grandmas House", "Attic"];

let billsPosition = 0;

console.log(myCatFriends[billsPosition]);
console.log(addresses[billsPosition]);

// Dictionaries

console.log("\n[*] Dictionary example:");
let firstCat = { name: "bill", lastName: "the cat", address: "The Alley" }
let secondCat = { name: "tabby", lastName: "cat", address: "Grandmas House" }
let thirdCat = { name: "ceiling", lastName: "cat", address: "Attic" }

console.log(firstCat.name, firstCat.address);

// Callbacks
console.log("\n[*] Callback example that waits for completion:");
function measureLoopSpeed(done) {
  var count = 0
  function addOne() { count = count + 1 }

  // Date.now() returns a big number representing the number of
  // milliseconds that have elapsed since Jan 01 1970
  var now = Date.now()

  // Loop until Date.now() is 1000 milliseconds (1 second) or more into
  // the future from when we started looping. On each loop, call addOne
  while (Date.now() - now < 1000) addOne()

  // Finally it has been >= 1000ms, so let's print out our total count
  done(count)
}

function displayCount(count) {
  console.log("Done! it took " + count + " ms");
}

measureLoopSpeed(displayCount);