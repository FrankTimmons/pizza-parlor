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

$(document).ready(function(){
  $("form#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    let toppingArray = [];
    let size = $("input:radio[name=size]:checked").val()
   $("input:checkbox[name=topping]:checked").each(function(){
    toppingArray.push($(this).val());
    });
    let pizza = new Pizza(toppingArray, size);
    pizza.priceCalc();
    console.log(pizza.price);
  });
});