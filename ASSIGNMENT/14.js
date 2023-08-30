"use strict";
// Your list of guests
let guests = ['Alice', 'Bob', 'Carol'];
// Guest who can't make it
let guest_cant_make_it = 'Bob';
console.log(`Unfortunately, ${guest_cant_make_it} can't make it to the dinner.`);
// New guest to invite
let new_guest = 'David';
// Find the index of the guest who can't make it
let index_of_guest_cant_make_it = guests.indexOf(guest_cant_make_it);
// Replace the name of the guest who can't make it with the new guest
guests[index_of_guest_cant_make_it] = new_guest;
// Print a second set of invitation messages for the updated guest list
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to the dinner. Please join us!`);
}
