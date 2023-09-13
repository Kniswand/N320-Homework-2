//These will get the numbers that are to be used
// I had ot resaerch how to use "parseFloat" on my own as it kept taking them as strings rather than as numbers
var num1 = parseFloat(document.querySelector("input").value);
var num2 = parseFloat(document.querySelector("div > input").value);

//These are placeholders to define the variables
var total;
var average;

//This is the higher-order function that will "find the arithmetic values of addition, subtraction, multiplication and division of the two numbers"
function higherOrder(num1, num2){
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
}

//This is the callback that will "go through the values to find the average"
function callback(num1, num2){
    total = num1 + num2;
    average = (num1 + num2) / 2;
    return total, average;
}

//This part of the code will actucally run the above functions
var calculations = higherOrder(num1, num2);
var results = callback(num1, num2);

document.querySelector("p").innerHTML = "Number 1: " + num1 + "<br>" + "Number 2: " + num2 + "<br>" + "Total: " + total + "<br>" + "Average: " + average;

// I made this to update the page (IDK how else to do it)
document.querySelector("button").addEventListener('click', function() {
    location.reload();
  });

