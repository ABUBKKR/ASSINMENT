"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let string1 = "hello";
let string2 = "world";
let num1 = 10;
let num2 = 5;
let array = [1, 2, 3, 4, 5];
let item = 3;
// Equality and inequality with strings
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2); // Should print false
// Lower case function
console.log("Is string1 lowercase? I predict True.");
console.log(string1.toLowerCase() === "hello"); // Should print true
// Numerical tests
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2); // Should print false
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // Should print true
console.log("Is num2 less than or equal to num1? I predict True.");
console.log(num2 <= num1); // Should print true
// "And" and "Or" operators
console.log("Is num1 greater than 5 and num2 less than 7? I predict True.");
console.log(num1 > 5 && num2 < 7); // Should print true
console.log("Is num1 greater than 12 or num2 less than 3? I predict False.");
console.log(num1 > 12 || num2 < 3); // Should print false
// Test whether an item is in an array
console.log("Is item in the array? I predict True.");
console.log(array.indexOf(item) !== -1); // Should print true
// Test whether an item is not in an array
console.log("Is item not in the array? I predict False.");
console.log(array.indexOf(item) === -1); // Should print false
