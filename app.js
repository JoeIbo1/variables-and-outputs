// use "use strict;" to be able to define varibels with "let, var and cons"
"use strict";
//this makes it posible to use fucktions as the site loads
window.addEventListener("load", go);

// we are giving the word "number" a value that is "0" 
let number = 0;

// as the site loads these fuctions are ready to start, one makes it possible to click on the + and the - botten
function go() {
  console.log("app running");
  document.querySelector("#btn-increment").addEventListener("click", numberUp);
  document.querySelector("#btn-decrement").addEventListener("click", numberDown);
 
}

function numberUp(){
 console.log("plus-knap");
 console.log(number);
 number ++;
 displayNumber();

}


function numberDown() {
 console.log("plus-knap");
 console.log(number);
 number--;
 displayNumber();
}

function displayNumber(){
 console.log("displayNumber");
document.querySelector("#number").textContent = number;
let message = `The number is: ${number}`;
console.log(message);
document.querySelector("#message").textContent = message;

}