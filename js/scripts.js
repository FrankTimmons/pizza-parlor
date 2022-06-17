function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.priceCalc = function(){
  if (this.size == "small"){
    this.price = 10;
  }else if (this.size == "medium"){
    this.price = 15;
  }else if (this.size == "large"){
    this.price = 20;
  }
  let toppingArray = this.toppings;
  let toppingPrice = 0;
  toppingArray.forEach(function() {
    toppingPrice += 2;
  });
  this.price += toppingPrice;
}

const myPizza = new Pizza(["anchovies", "pineapple"], "medium");