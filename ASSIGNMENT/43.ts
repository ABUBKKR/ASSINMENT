//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



// Function to create a sandwich
function createSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    console.log("Bread");
    
    for (const item of items) {
        console.log(item);
    }
    
    console.log("Bread\n");
}

// Call the function to create sandwiches with different items
createSandwich("Ham", "Cheese", "Lettuce", "Tomato");
createSandwich("Turkey", "Swiss", "Mayonnaise");
createSandwich("Peanut Butter", "JAM")



