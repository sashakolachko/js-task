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
console.log(split('Sasha,Den,Tommy, Frenk', ','));
