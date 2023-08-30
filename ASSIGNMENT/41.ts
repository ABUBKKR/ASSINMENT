//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Function to show magicians' names
function sHowMagicians(magiciansArray: string[]): void {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}

// Function to make magicians great
function maKeGreat(magiciansArray: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magiciansArray) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Call the makeGreat function and modify the magicians' names
const greatMagicianC = maKeGreat(magicians);

// Show the modified names using the showMagicians function
sHowMagicians(greatMagicianC);