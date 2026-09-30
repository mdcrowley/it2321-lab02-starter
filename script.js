// Lab 2: Functions with Conditionals and Loops
// Goal: write several small functions. Each should take input, do one job
// with a conditional or a loop, and return a value (not just print it).

"use strict";

// TODO 1: Write a function that uses a CONDITIONAL.
//         Example idea: letterGrade(score) returns "A", "B", "C", "D", or "F".
// function letterGrade(score) {
//   // use if / else if / else and return a letter
// }

// TODO 2: Write a function that uses a LOOP.
//         Example idea: sumTo(n) returns 1 + 2 + ... + n.
// function sumTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// TODO 3: Write a third function of your own that combines a loop and a
//         conditional. Example idea: countVowels(word) returns how many
//         vowels are in a string.

// TODO 4: Test each function. Call it with a few inputs, check the results
//         with console.log(), and print at least one with show().
// Example:
// console.log(letterGrade(85));   // expect "B"
// show("sumTo(5) = " + sumTo(5)); // expect 15


// ----- helper (you do not need to change this) -----
function show(value) {
  const box = document.getElementById("output");
  box.textContent += (box.textContent.trim() ? "\n" : "") + String(value);
}
