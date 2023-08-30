// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let travelingArea = ["TOKYO", "PARIS" , "MADINA MUNAVERA" , "ST MARTIN"];
// Print your array in its original order.
console.log("original order");
console.log(travelingArea);

// Print your array in alphabetical order without modifying the actual list.

console.log("\nAlphabetical order without modifying the actual list.");
console.log([...travelingArea].sort());

// • Show that your array is still in its original order by printing it.
console.log("Showing  array is still in its original order");
console.log(travelingArea);


// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse alphabetical order without changing the order of the original list");
console.log([...travelingArea].sort().reverse());

// • Show that your array is still in its original order by printing it again.
console.log("Showing  array is still in its original order");
console.log(travelingArea);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order");
travelingArea.reverse()
console.log(travelingArea);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBACK TO ORIGNAL");
travelingArea.reverse()
console.log(travelingArea);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nCHANGE TO ALPHABATICAL ORDER");
travelingArea.sort()
console.log(travelingArea);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nCHANGE TO REVERSE  ALPHABATICAL ORDER");
travelingArea.sort().reverse()
console.log(travelingArea);