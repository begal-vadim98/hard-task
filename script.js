'use strict'

const myFunction = function (string) {
  
  if(typeof string !== 'string') return "В качестве аргумента передана не строка";

  string = string.trim();

  if(string.length > 30) string = string.substring(0, 30) + "..."; return string;
  
}
console.log(myFunction("Функции, анонимные функции, callback - функции, чистые функции"));