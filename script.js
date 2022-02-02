'use strict'

const myArr = ['2349', '3672349', '4562349', '22349', '672349', '4442349', '543562349', ];

myArr.forEach((elem, index) => {
  
  if(elem[0] === "2" || elem[0] === "4") console.log(parseInt(elem));

})

for(let i = 2; i < 101; i++) {
  console.log(`${i} - Делители этого числа: 1 и ${i} `);
}
