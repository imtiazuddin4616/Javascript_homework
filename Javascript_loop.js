console.log("for loop");

for(let i=1;i<=10;i++){
  console.log(i);
}
console.log("------");

for(let i=10;i>=1;i--){
  console.log(i);
}

console.log("while loop");

let i=1;
while(i<=10){
  console.log(i);
  i++;
}

console.log("do while loop");

let x=1
do{
console.log(x);
x++;

}while(x<=10);

console.log("for in loop");

let cars={name:"BMW",model:"x5",price:10000000};
for(let x in cars){
  console.log(x);
  console.log(cars[x]);
}

