//var prompt = require('prompt-sync') ();
//
//get input from the user. 
//
//var n = prompt('How many more times?');
var prompt = require('prompt-sync')();
var balance = 1000;
while (balance>0){
   prompt("What do you want to buy?");
   var cost = prompt("what is the item's cost?");
   while (cost > balance){
       prompt("That costs too much. Your balance is " + balance + " Choose a cheaper item")
       cost = prompt("what is the item's cost?");
   }
   balance = balance - cost;
   console.log("Your balance is " + balance);
}