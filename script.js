const funcСhangeNumber = () => {

  const num = 266219;

  const numArray = Array.from(String(num));
  let x = 1;

    numArray.forEach((elem, i, a) => {

      x *= a[i];

    })

    return x;

}

console.log("Произведение цифр этого числа:" + " " + funcСhangeNumber() );
console.log("Данное число в 3 степени:" + " " + funcСhangeNumber() ** 3);
console.log( ( (funcСhangeNumber() ** 3).toString() ).substring(0, 2));
