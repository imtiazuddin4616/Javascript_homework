let cars={
  name:"bmw",
  model:"m4",
  price:1500000,
  drive: function(){
    
    return this.name+ " "+this.model;
  }
}
console.log(cars.name+" "+cars.model);
console.log(cars.drive());