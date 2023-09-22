
let name1="imtiaz uddin raju raju";
console.log(name1.indexOf("raju",14)); //starting from the 14th index from the starting
console.log(name1.lastIndexOf("raju",17)); //starting from the 17th index from backwards
let name="imtiaz uddin";
let names="imtiaz uddin boss imtiaz"
console.log(name.indexOf("imtiaz")); //index of a string
console.log(names.lastIndexOf("imtiaz")); //last index of a string
console.log(names.indexOf("imtiaz",16)); //searching a index number after a specific index number
console.log(name.indexOf("boss")); //-1 means the string we are looking for are not there
console.log(name.includes("imtiaz"));
let name3="imtiaz uddin raju";
console.log(name3.endsWith("uddin",12));
let name2="imtiaz uddin raju";
console.log(name2.startsWith("uddin",7));
