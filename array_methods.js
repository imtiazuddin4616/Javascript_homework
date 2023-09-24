const arr=["imtiaz","uddin","raju"];
arr.pop();
console.log(arr);
const arr1=["imtiaz","uddin"];
arr.push("raju");
console.log(arr1);
const arr2=["imtiaz","uddin","raju"];
arr.unshift("fahad");
console.log(arr2);

const arr3=["imtiaz","uddin"];
const names=arr3.concat("raju");
console.log(names);
const arr4=[["imtiaz","uddin"],["raju","iqbal"]];
console.log(arr4.flat());