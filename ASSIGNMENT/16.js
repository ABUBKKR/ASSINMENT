"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end program 
let GUESTARRAY = ["MARYUM",
    "MAHEEN",
    "USMAN",
    "BOB"];
// PRINT 
for (let y = 0; y < GUESTARRAY.length; y++) {
    console.log(`I CAN INVITE ONLY TWO PEOPLE FOR THE DINNER`);
}
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (GUESTARRAY.length > 2) {
    let RemoveGUEST = GUESTARRAY.pop();
    console.log(`Sorry ,${RemoveGUEST}, I Cannot invite you on the dinner`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < GUESTARRAY.length; i++) {
    console.log(`HELLO`, GUESTARRAY[i], "YOU ARE STILL INVITED TO THE DINNER");
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end program
GUESTARRAY.pop();
GUESTARRAY.pop();
// print empty String
console.log(`GUESTARRAY AFTER DINNER :${GUESTARRAY}  []`);
