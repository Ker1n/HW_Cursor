function getHW3() {
  //Task#1
  function getMaxDigit(number) {
    number = number.split("");
    let maxDigit = number[0];
    for (let i = 0; i < number.length; i++) {
      if (number[i] > maxDigit) {
        maxDigit = number[i];
      }
      number[i]++;
    }
    return Number.parseInt(maxDigit);
  }

  //Task#2
  function degree(number, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
      result = result * number;
    }
    return result;
  }

  //Task#3

  function nameСorrection(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

  //Task#4
  function balanceAftertaxes(profit) {
    return profit * 0.805;
  }

  //Task#5
  function findRandomNumber(a, b) {
    return Math.round(Math.random() * (b - a) + 1);
  }

  //Task#6
  function counterLetters(letter, word) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === letter.toLowerCase()) {
        result++;
      }
    }
    return result;
  }

  //Task#7

  function exchange(value, currency) {
    const exchangeRate = 27.9;

    if (currency === "USD") {
      return value * exchangeRate + " UAH";
    } else if (currency === "UAH") {
      return value / exchangeRate + "USD";
    } else {
      console.log("Not right the currency, just USD and UAH");
    }
  }

  //Task#8
  function randomPassword(value) {
    const password = [];
    if (value <= 0) {
      return 0;
    }
    do {
      const value = Math.round(Math.random() * 9);
      password.push(value);
    } while (password.length < value);
    return password.join("");
  }

  //Task#9

  function deleteLetters(letter, string) {
    let str = string.toLowerCase();
    return str.split(letter.toLowerCase()).join("");
  }

  //Task#10
  function isPalindrome(string) {
    let str = string.length;
    let result = "";
    for (let i = 0; i < str; i++) {
      if (string[i] === string[str - i - 1]) {
        result = `Yes, it's palindrome`;
      } else {
        result = `No, it's not palindrome`;
        return result;
      }
    }
    return result;
  }

  //Task#11
  function deleteDuplicateLetter(string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
      if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
        str += string[i];
      }
    }
    return str;
  }
 

  document.getElementById('hw3').innerHTML =   `
    Max digit: ${getMaxDigit("123456790")} <br>
    Degree: ${degree(2, 3)} <br>
    Name correction: ${nameСorrection("AlexSaNDer")} <br>
    Balance after taxes: ${balanceAftertaxes(983)} <br>
    Random number: ${findRandomNumber(1, 10)} <br>
    Counter letters: ${counterLetters("а", "Асталавіста")} <br>
    Exchange: ${exchange(100, "USD")} <br>
    Random password: ${randomPassword(10)} <br>
    Letters deleted: ${deleteLetters("a", "blablabla")} <br>
    Is't palindrom? : ${isPalindrome("мадам")} <br>
    Duplicate letters deleted: ${deleteDuplicateLetter(
        "бісквіт був дуже ніжним"
    )} <br>
    `;


}
export default { 
    getHW3
}