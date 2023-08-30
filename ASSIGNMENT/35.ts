// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: number, Message: string): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${Message}`);
}

let shirtSize: number = 42; 
let Message: string = "This is a great shirt!";

make_shirt(shirtSize, Message);