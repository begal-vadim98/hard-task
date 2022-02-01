'use strict'

const myFunction = function (string) {
  
  if(typeof string !== 'string') {

    return "В качестве аргумента передана не строка";

  } else if(string.length > 30) {

    string = string.trim();
    string = string.substring(0, 30) + "...";

    return string;

  } else {

    return string;

  }
  
}
console.log(myFunction("loremloremloremloremloremloremlorem"));