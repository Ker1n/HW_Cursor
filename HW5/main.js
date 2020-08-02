//Task #1
function getRandomArray(length, min, max) {
  let randomNumbersArray = [];
    for (let i = 0; i < length; i++) {
      randomNumbersArray.push(Math.round(Math.random() * (max - min) + min));
    }
  return randomNumbersArray;
}
console.log('getRandomArray: ', getRandomArray(15, 1, 100));

//Task #2
function getModa(...numbers) {
  let arr = new Array(numbers.length).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) arr[i]++;
    }
  }
  let max = Math.max(...arr);
  let maxIndex = arr.findIndex((value) => {
    if (value === max) return true;
  });
  return numbers[maxIndex];
};
console.log('getModa: ', getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//Task#3 
function getAverage(...arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  return sum / arr.length;
}
console.log('getAverage: ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//task#4
function getMedian(...numbers) {
  
  numbers.sort((a, b) => a - b);
  let i = Math.floor(numbers.length / 2);
  return numbers[i];
};
console.log('getMedian: ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//task#5
function filterEvenNumbers(...numbers) {
  return numbers.filter(numbers => numbers % 2 !== 0)
}
console.log('filterEvenNumbers: ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

//task#6
function countPositiveNumbers(...numbers) {
  return numbers.filter(numbers => numbers > 0).length;
}
console.log('countPositiveNumbers: ', countPositiveNumbers(1, -2, 3, -4, -5, 6));

//task#7
function getDividedByFive(...numbers) {
  return numbers.filter(numbers => numbers % 5 === 0);
}
console.log('getDividedByFive: ',getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

//task#8
const BADWORDS = ["fuck", "shit"];

function replaceBadWords(string) {

  let arr = string.split(" ");
  const swap = new RegExp(BADWORDS.join("|"));
  arr = arr.map((word) => word.replace(swap, "****"));
  return arr.join(" ");
}
console.log('replaceBadWords: ', replaceBadWords("Are you fucking kidding?"));

//Task#9
function divideByThree(word) {
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

//task#10
function generateCombinations(word) {

  if (word.length < 2) {
    return [word];
  } else {
    let result = [];
    for (var i = 0; i < word.length; i++) {
      let letter = word[i];
      let shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      let shortwordArray = generateCombinations(shorterWord);
      for (let j = 0; j < shortwordArray.length; j++) {
        result.push(letter + shortwordArray[j]);
      }
    }
    return result;
  }
}
console.log('generateCombinations: ', generateCombinations("man"));
