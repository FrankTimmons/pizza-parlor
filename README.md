Describe Pizza():

Test: "It should return a Pizza object with two properties for toppings and size"  
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");  
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }  

Describe Pizza.prototype.price():  

Test: "It should return a price based on the pizza's size."
Code:  
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");  
myPizza.priceCalc();  
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", price: 15 }  