/*
  Rubric Pseudocode
  1. Create three variables
  2. Create function to obtain each piece of the combination (10 - 40 -39)
     a. addition 6 + 4 = 10
     b. multiplication 5 * 8 = 40
     c. subtraction 48 - 9 = 39
  3. Assign value to variables
  4. Update HTML page with combination
*/

let comboPart1 = 0;
let comboPart2 = 0;
let comboPart3 = 0;

function sum(a,b){
  return a + b;
}
function multiply(a,b){
  return a * b;
}
function subtract(a,b){
  return a - b;
}


// Pulling combination
// Rubric Variables Assignment: each part of combo assigned to different variable
comboPart1 = sum(6,4);
comboPart2 = multiply(5,8);
comboPart3 = subtract(48,9);


// Output to HTML
// Configuring combo into proper format
let combination = `${comboPart1} - ${comboPart2} - ${comboPart3}`
document.getElementById('combination').innerHTML = combination;
