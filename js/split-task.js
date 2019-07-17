function split(str, gap) {
  var arr = [];
  var index;
  while (str.includes(gap)) {
    var temp = '';
    index = str.indexOf(gap);
    for (var i = 0; i < index; i++) {
      temp += str[i];
    }
    arr.push(temp);
    str = str.replace(temp + gap, '');
  }
  arr.push(str);
  return arr;
}

function replaceStopWords(str){
  var stopWords = {
    "fucking": "freaking",
    "shit": "stuff"
  }
  for (var i in stopWords) {
    if (str.includes(i)) {
      str = str.replace(i, stopWords[i])
    }
  }
  return str;
}

function deleteFromArray(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0].toUpperCase() !== arr[i][arr[i].length-1].toUpperCase()) {
      newArr.push(arr[i]);
    }

  }
  return newArr;
}

var test = ["Test", "win", "pop", "delete", "mom"];
console.log(deleteFromArray(test));
console.log(split('Sasha,Den,Tommy, Frenk', 'Sasha'));

var str = "This fucking shit keeps pisiing me off";
console.log(replaceStopWords(str));
