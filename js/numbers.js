var actionErrorMessage = "Invalid data input. Please input correct action!!!";
var numberErrorMessage = "Invalid data. Please input numbers!!!";
var zeroDevision = "Division by zero is not possible!!!";

var firstNumber = parseInt(prompt("Enter first number:"));
var secondNumber = parseInt(prompt("Enter second number:"));
var action = prompt("Enter action (SUM, DIV, MIN, MULT):");

switch (action.toUpperCase()) {

  case 'SUM':
    if(isNaN(firstNumber + secondNumber)){
      alert(numberErrorMessage);
    } else {
      alert("Result: "+ (firstNumber + secondNumber));
    }
    break;

  case 'MIN':
    if(isNaN(firstNumber - secondNumber)){
      alert(numberErrorMessage);
    } else {
      alert("Result: "+ (firstNumber - secondNumber));
    }
    break;

  case 'MULT':
    if(isNaN(firstNumber * secondNumber)){
      alert(numberErrorMessage);
    } else {
      alert("Result: "+ firstNumber * secondNumber);
    }
    break;

  case 'DIV':
    if(isNaN(firstNumber / secondNumber)){
      alert(numberErrorMessage);
    } else if (secondNumber != 0) {
      alert("Result: "+ firstNumber / secondNumber);
    } else {
      alert(zeroDevision);
    }
    break;

  default:
    alert(actionErrorMessage);
}
