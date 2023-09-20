function num(a,b,c){
  num=a*b*c;
  return num;

}


console.log(num(2,2,2));

console.log("-------");

function number(a,b,c){
  console.log(a,b,c);

}
number(1,2,3); 

console.log("-------");

function number(a,b,c){
  let x=a*b+c;
  console.log(x);
}
number(1,2,4);

console.log("------");

let cars={
  name:"toyota",
  model:"supra",
  price:100000000,
  drive: function(){
  console.log(this.name+" "+ this.model+" "+" is driving");
  }
 
 }

console.log(cars.name);
console.log(cars.name+" "+cars.model+" "+"price is" + " "+cars.price);
cars.drive();



