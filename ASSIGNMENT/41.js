//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define an array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
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
var greatMagicianC = makeGreat(magicians);
// Show the modified names using the showMagicians function
showMagicians(greatMagicianC);