let inputNumberN = Number.parseFloat(prompt("Please enter first number"));
let inputNumberM = Number.parseFloat(prompt("Please enter second number"));
const checkNumberN = Number.isFinite(inputNumberN) || Number.isFinite(inputNumberM);

if (inputNumberN >= inputNumberM) alert("Number M must be greater than Number N"); 
if (!checkNumberN) alert("please enter integer numbers") ;

const useEvenOrOdd  = confirm ("Need to skip even numbers?");

let sum = 0;
  for (let i = inputNumberN; i <= inputNumberM; i++) {
    if (useEvenOrOdd && i % 2 === 0) continue;
    else {
    sum += i;
    }
  };
console.log(`total: ${sum}`);
