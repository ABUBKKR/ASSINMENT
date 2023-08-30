//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Define an array of magician's names
let MAgicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Function to show magicians' names
function showMagicians(magiciansArray: string[]): void {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}

// Function to make magicians great
function makeGreat(magiciansArray: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magiciansArray) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Call the makeGreat function and modify the magicians' names
const GreatMagicianC = makeGreat(MAgicians);
//print
console.log("Original Magicians:");
showMagicians(MAgicians);

console.log("\nModified Magicians:");
showMagicians(GreatMagicianC);