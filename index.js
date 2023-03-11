function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
 
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function increment(number){
    return (number += 1);
}
function decrement(number){
    return (number -= 1);
}
function makeInt(n) {
    return parseInt(n);
  }

  function makeInt(n) {
    let parsedInt = parseInt(n);
    if (isNaN(parsedInt)) {
      return NaN;
    }
    return parsedInt;
  }
  function makeInt(n) {
    return parseInt(n, 10);
  }

  function preserveDecimal(n) {
    return parseFloat(n);
  }