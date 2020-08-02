//Task #1
function getRandomArray(length, min, max) {
  let randomNumbersArray = [];
  for (let i = 0; i < length; i++) {
    randomNumbersArray.push(Math.round(Math.random() * (max - min) + min));
  }
  return randomNumbersArray;
}
console.log(getRandomArray(3, 1, 3))

//Task #2

//Функція getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.





//Task#3 

function getAvarage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(getAvarage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//task#4
function getMedian (...numbers) {
  numbers.sort((a, b) => a - b);
  let i = Math.floor(numbers.length / 2);
  return numbers[i];
};

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



//task#5
function filterEvenNumbers(...numbers) {
  return numbers.filter(numbers => numbers % 2 !== 0)
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

//task#6
function countPositiveNumbers(...numbers) {
  return numbers.filter(numbers => numbers > 0).length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

//task#7
function getDividedByFive(...numbers) {
  return numbers.filter(numbers => numbers % 5 === 0);
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


//task#8




//Task#9

function divideByThree (word) {
  
  const arrayByThreeLetter = [];
  for (let i = 0; i < word.length; i += 3) {
    if (3 > word.length - i) {
      arrayByThreeLetter.push(word.slice(i));
    } else {
      arrayByThreeLetter.push(word.slice(i, i + 3));
    }
  }
  return arrayByThreeLetter;
};
console.log('divideByThree: ', divideByThree("commander"));
