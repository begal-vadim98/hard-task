const funcСhangeNumber = () => {

  const num = 266219;

  const numArray = Array.from(String(num));
  let x = 1;

    numArray.forEach((elem, i, a) => {

      x *= a[i];

    })

    return x;

}
funcСhangeNumber();

const resultFunction = funcСhangeNumber();
const resultFunctionВegree = funcСhangeNumber() ** 3;

const resultFunctionChangeString = resultFunctionВegree.toString(); 

console.log("Произведение цифр этого числа:" + " " + resultFunction );
console.log("Данное число в 3 степени:" + " " + resultFunctionВegree);
console.log(resultFunctionChangeString.substring(0, 2));
