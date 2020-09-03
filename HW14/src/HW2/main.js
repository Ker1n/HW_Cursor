

let numberOne = document.getElementById('firstNumber').parseFloat(value);
let numberTwo = document.getElementById('secondNumber').parseFloat(value);




while (!Number.isFinite(numberOne) || (!Number.isInteger(numberOne))) {
  numberOne = Number.parseFloat(console.log("first number must be an integer"));
}
while (!Number.isFinite(numberTwo) || (!Number.isInteger(numberTwo))) {
  numberTwo = Number.parseFloat(console.log("second number must be an integer"));
}

if (numberOne >= numberTwo) alert(
`First number must be greater than Second number
Please reload the page`
);

const useEvenOrOdd  = confirm ("Need to skip even numbers?");

let sum = 0;
  for (let i = inputNumberN; i <= inputNumberM; i++) {
    if (useEvenOrOdd && i % 2 === 0) continue;
      else {
      sum += i;
      }
  };
console.log(`total: ${sum}`);



// export default { 
//   getHW2
// }