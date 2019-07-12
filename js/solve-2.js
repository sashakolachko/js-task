
var arg1 = parseInt(prompt("Input first number"));
var arg2 = parseInt(prompt("Input second number"));
var action = prompt("Input acrion");

var result = {
  "sum": arg1 + arg2,
  "min": arg1 - arg2,
  "mult": arg1 * arg2,
  "div": arg1/arg2
}
if(result[action]){
  alert("Result: " + result[action]);
} else {
  alert("Invalid data!");
}
