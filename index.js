const readline = require('readline-sync');

const userName = readline.question("What is your name? ");
console.log(`\nHello, ${userName}! Welcome to the Values, Data Types, and Operations Quiz.\n`);

console.log("--- Quiz Start ---\n");

const q1Answer = Number(readline.question("Question 1: What does Number('100px') evaluate to? Enter 1 for NaN, 2 for 100, 3 for 0: "));
const q2Answer = readline.question("Question 2: What is the output of '5' + 2 in JavaScript? ");
const q3Answer = readline.question("Question 3: What data type does Number(null) convert to when evaluated numerically (enter the number result)? ");
const q4Answer = readline.question("Question 4: Which operator checks both value and data type without implicit conversion (== or ===)? ");
const q5Answer = readline.question("Question 5: Does Number(undefined) return 0 or NaN? ");

console.log("\n==================================");
console.log(`Thank you for completing the quiz, ${userName}!`);
console.log("==================================");
console.log("Here are the answers you provided:\n");

console.log(`1. Your choice for Number('100px'): ${q1Answer}`);
console.log(`2. Your answer for '5' + 2: ${q2Answer}`);
console.log(`3. Your answer for Number(null): ${q3Answer}`);
console.log(`4. Your answer for strict equality operator: ${q4Answer}`);
console.log(`5. Your answer for Number(undefined): ${q5Answer}`);

console.log("\nGreat job on testing your JavaScript knowledge!");
