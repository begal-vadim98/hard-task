'use strict'

const myFunction = function (string) {
  if(typeof string !== 'string') {

    return "В качестве аргумента передана не строка";

  } else if(typeof string === 'string') {
    string = string.trim();

    if(string.length > 30) {

      string = string.substring(0, 30) + "...";

      return string;
  
    }

    return string;

  } 
  
}
console.log(myFunction("lorem  lorem lorem lorem lorem "));