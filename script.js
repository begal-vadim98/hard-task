const funcСhangeNumber = () => {

  const num = 266219;

  const numArray = Array.from(String(num));
  let x = 1;

    numArray.forEach((elem, i, a) => {

      x *= a[i];

    })

    return x;

}
const resultFuncChangeNumber = funcСhangeNumber() ;

console.log("Произведение цифр этого числа:" + " " + resultFuncChangeNumber );
console.log("Данное число в 3 степени:" + " " + resultFuncChangeNumber ** 3);
console.log( ( (resultFuncChangeNumber ** 3).toString() ).substring(0, 2));
