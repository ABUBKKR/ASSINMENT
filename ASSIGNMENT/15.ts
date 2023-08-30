// Original guest list containing names of people to invite
let guestList: string[] = ["Albert Einstein", "Jane Austen", "Nelson Mandela"];

// Print personalized dinner invitations for the original guest list
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},`);
  console.log("You are cordially invited to a dinner at my residence.");
  console.log("Please join us for an evening of delightful conversations and great food.");
  console.log("Sincerely,\n[Your Name]\n");
}

// Inform about the bigger dinner table
console.log("Good news! We have found a bigger dinner table.");

// Add new guests
guestList.unshift("Isaac Newton");  // Add to the beginning
guestList.splice(2, 0, "Marie Curie");  // Add to the middle
guestList.push("Leonardo da Vinci");  // Add to the end

// Print personalized dinner invitations for the updated guest list
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},`);
  console.log("You are cordially invited to a dinner at my residence.");
  console.log("Please join us for an evening of delightful conversations and great food.");
  console.log("Sincerely,\n[Your Name]\n");
}