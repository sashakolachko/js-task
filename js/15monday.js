function guess() {
  var attempts = 3;
  var max = 100;
  var min = 0;
  var possibleNumber;
  var number = Math.floor(Math.random() * (max - min)) + min;

  while (attempts != 0) {
    possibleNumber = parseInt(prompt("Guess the number. You have 3 attempts"));
    if (number === possibleNumber) {
      alert("You won");
      return;
    }
    attempts--;
  }
  alert("You can try again");
  guess();
}

function sortWords(str) {
  var arr = str.split(' ');
  return arr.sort();
}

function changeCase(str) {

  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      continue;
    }
    if (str[i].toUpperCase() == str[i]) {
      str = str.replace(str[i], str[i].toLowerCase())
    } else {
      str = str.replace(str[i], str[i].toUpperCase())
    }
  }
  return str;
}

function reversrStr(str) {

  var arr = str.split('');
  arr = arr.reverse();
  str = arr.join('');

  return str;
}

function equation(a, b, c) {
  var result = [];
  var d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    console.log("No result!");
    return;
  } else if (d == 0) {
    var x1 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("x1:" + x1);
    result.push(x1);
  } else {
    var x1 = (-b - Math.sqrt(d)) / (2 * a);
    var x2 = (-b + Math.sqrt(d)) / (2 * a);
    result.push(x1);
    result.push(x2);
  }

  return result;
}


let perfectFunction = str => {
  str = str.replace(/\,|\.|\?|\:/g, '');
  let arr = str.split(' ');

  let counter = {};

  for (let word of arr) {
    if (Object.keys(counter).includes(word)) {
      counter[word] += 1;
    } else {
      counter[word] = 1;
    }
  }

  return counter;
}

function statistic(str) {
  str = str.replace(/\,|\.|\?|\:/g, '');
  var arr = str.split(' ');

  var counter = {};
  for (word of arr) {
    if (Object.keys(counter).includes(word)) {
      counter[word] += 1;
    } else {
      counter[word] = 1;
    }

  }
  return counter;
}

function deleteArr(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

function passwordCheck(password) {
  var result = false;

  if (password.length >= 8 && password.match(/(\d)([A-z])/g)) {
    result = true;
  }
  return result;
}

function wordEncryption(str) {
  var min = 0;
  var max = 10;
  var charMin = 33;
  var cahrMax = 126;
  var arr = str.split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(Math.floor(Math.random() * (max - min)) + min);
    newArr.push(String.fromCharCode(Math.floor(Math.random() * (cahrMax - charMin)) + charMin));
  }
  str = newArr.join('');

  return str;
}



console.log(wordEncryption("Hello my dear friend"));
console.log(passwordCheck("4Fwert"));
console.log(deleteArr(['1', '2', '6', '90', '78'], ['2', '23']));
console.log(statistic("Hello, people! My name is Steve. It is really nice to be here"));
console.log(equation(4, 0, 0));
console.log(reversrStr("it's wonderfull day"));
console.log(sortWords("Helo my dear friend!"));
console.log(changeCase("HoW Are You"));
