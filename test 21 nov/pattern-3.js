let n = 5;
let string = "";
function star(a) {

    for (let i = 1; i <= a; i++) {

  for (let j = 1; j <= a - i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === a) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
}
star(n)
