"use strict";
// # Storing a name with whitespace characters
let name_with_whitespace = "\t   John Smith \n";
// # Removing all whitespace using replace
let name_without_whitespace = name_with_whitespace.replace(' ', '').replace('\t', '').replace('\n', '');
// # Printing the name after removing whitespace
console.log("Name after removing whitespace:");
console.log("'" + name_without_whitespace + "'");
