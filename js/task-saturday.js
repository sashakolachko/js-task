//first task
var arr1 = [13, 81, 96, 324, 15];
arr1.reverse();
arr1.pop();
arr1.reverse();
console.log(arr1);

//second and third task
var arr2 = [44, 12, 38, 96, 55, 11, 82, 16, 49];
if (arr2.length <= 5) {
  console.log(arr2);
} else {
  arr2.splice(5)

  arr2.sort(); //third task
  console.log(arr2);
}

//fourth task
var arr3 = ['John', 'Kate', 'Dave', 'Den', 'Adele'];
var element = prompt("Input a word");

if (!arr3.includes(element)) {
  alert("Not found!")
} else if ((arr3.indexOf(element) % 2) === 0) {
  alert("All good!")

} else {
  arr3.splice(arr3.indexOf(element), 1);
  console.log(arr3);
}
