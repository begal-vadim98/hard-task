'use strict'

const myArr = ['2349', '3672349', '4562349', '22349', '672349', '4442349', '543562349', ];

myArr.forEach((elem, index) => {
  
  if(elem[0] === "2" || elem[0] === "4") console.log(parseInt(elem));

})

// Вывод в столбик всех простых чисtk от 1 до 100
let range = 100;

for (let i = 2; i <= range; i++) {

  let n = 1;

  if (i > 2 && i % 2 != 0) {

    for (let j = 3; j <= i; j++) {
      if (i % j === 0) n = 0;
      break;
    }

  } else if (i !== 2) n = 0;

  if (n === 1) console.log(i);
  
}