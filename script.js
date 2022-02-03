'use strict'

const myArr = ['2349', '3672349', '4562349', '22349', '672349', '4442349', '543562349', ];

myArr.forEach((elem, index) => {
  
  if(elem[0] === "2" || elem[0] === "4") console.log(parseInt(elem));

})

// Вывод в столбик всех простых чисtk от 1 до 100
let range = 100;
marker:
for(let i = 2; i <= range; i++) {
  

  for(let n = 2; n < i; n++) {

    if(i % n == 0) continue marker;
      
 }
 console.log(i, ` Делители этого числа: 1 и ${i}`);
}
