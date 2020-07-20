let inputNumberN = Number.parseFloat(prompt("Please enter first number"));
let inputNumberM = Number.parseFloat(prompt("Please enter second number")); 

while (!Number.isFinite(inputNumberN) || (!Number.isInteger(inputNumberN))) {
  inputNumberN = Number.parseFloat(prompt("first number must be an integer"));
}
while (!Number.isFinite(inputNumberM) || (!Number.isInteger(inputNumberN))) {
  inputNumberM = Number.parseFloat(prompt("second number must be an integer"));
}

if (inputNumberN >= inputNumberM) alert(
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
