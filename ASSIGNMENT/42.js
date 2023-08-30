//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define an array of magician's names
var MAgicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Function to show magicians' names
function showMagicians(magiciansArray) {
    for (var _i = 0, magiciansArray_1 = magiciansArray; _i < magiciansArray_1.length; _i++) {
        var magician = magiciansArray_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great
function makeGreat(magiciansArray) {
    var greatMagicians = [];
    for (var _i = 0, magiciansArray_2 = magiciansArray; _i < magiciansArray_2.length; _i++) {
        var magician = magiciansArray_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Call the makeGreat function and modify the magicians' names
var GreatMagicianC = makeGreat(magicians);
//print
console.log("Original Magicians:");
showMagicians(MAgicians);
console.log("\nModified Magicians:");
showMagicians(greatMagicianC);

