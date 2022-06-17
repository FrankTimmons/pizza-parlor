//Business Logic

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

//UI Logic

function checkPizza(array){
  let toppingArray = array;
  console.log(toppingArray);
  if (toppingArray.includes("Pepperoni") && toppingArray.includes("Sausage") && toppingArray.includes("Bell Peppers")){
    $("#everything").show();
  }else if (toppingArray.includes("Pepperoni") && toppingArray.includes("Sausage")){
    $("#meatlover").show();
  }else if (toppingArray.includes("Pepperoni") && toppingArray.includes("Bell Peppers")){
    $("#pep-n-bell").show();
  }else if (toppingArray.includes("Sausage") && toppingArray.includes("Bell Peppers")){
    $("#sausage-n-bell").show();
  }else if (toppingArray.includes("Pepperoni")){
    $("#pep").show();
  }else if (toppingArray.includes("Sausage")){
    $("#sausage").show();
  }else if (toppingArray.includes("Bell Peppers")){
    $("#bell").show();
  }else {
    $("#cheese").show();
  }
}

function turnOffPizza(){
  $("#everything").hide();
  $("#meatlover").hide();
  $("#pep-n-bell").hide();
  $("#sausage-n-bell").hide();
  $("#pep").hide();
  $("#sausage").hide();
  $("#bell").hide();
  $("#cheese").hide();
}

$(document).ready(function(){  
  $("form#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    turnOffPizza()
    let toppingArray = [];
    let size = $("input:radio[name=size]:checked").val()
    $("input:checkbox[name=topping]:checked").each(function(){
      toppingArray.push($(this).val());
    });
    let pizza = new Pizza(toppingArray, size);
    checkPizza(toppingArray);
    pizza.priceCalc();
    $(".pizza").show();
    $(".pizza-price").text(pizza.price);
  });
});