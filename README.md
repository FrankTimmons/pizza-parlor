# Pizza Parlor

#### By Frank Timmons

#### A web page that gives the user a price for a pizza based on inputs.

## Technologies Used

* JavaScript
* HTML
* CSS
* jQuery
* Bootstrap

## Description

This application will have auser submit a form with radio buttons for pizza size, and checkboxes for toppings, then return the price of the pizza.  As a bonus functionality, an image of the pizza will also be returned.  

## Setup/Installation Requirements

* Clone this repository to your computer.
* Open pizza-parlor directory.
* Open index.html.
* Fill out the form, and the make pizza button.

## Known Bugs

* No known bugs

## Tests

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

Test: "It should add 2 dollars for every topping added to the pizza."  
Code:
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");  
myPizza.priceCalc();  
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", price: 19 } 

## License

[MIT](/LICENSE)

Copyright (c) 2022 Frank Timmons