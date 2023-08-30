//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianArray = ["David Copperfield", "Harry Houdini", "PennJillette", "Teller"];

function Magicians(magicians: string[]){
    for(let magician of magicians )
    console.log(magician);
    
}

Magicians(magicianArray)