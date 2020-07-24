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
};
console.log('Max digit:', getMaxDigit("123456790"));

//Task#2 
function degree(number, exp) {
    
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result = result * number;
    }
    return result;
}
console.log('Degree: ', degree(2, 3));


//Task#3

function nameСorrection(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log('Name correction: ', nameСorrection("AlexSaNDer"));

//Task#4
function balanceAftertaxes(profit) {
    return profit * 0.805
}
console.log('Balance after taxes: ', balanceAftertaxes(983));


//Task#5
function findRandomNumber(a, b) {
    return Math.round(Math.random() * (b - a) + 1);
}
console.log('Random number: ', findRandomNumber(1, 10));


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
console.log('Counter letters: ', counterLetters("а", "Асталавіста"));


//Task#7

function exchange (value, currency) {
    
    const exchangeRate = 27.9;
  
    if (currency === "USD") { 
      return (value * exchangeRate) + " UAH";
    } else if (currency === "UAH") {
       return (value / exchangeRate) + "USD";
    } else {
      console.log ("Not right the currency, just USD and UAH")
    }
  }      

    console.log('Exchange: ', exchange(100, "USD"));
  


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
console.log('Random password: ', randomPassword(10));



//Task#9 

function deleteLetters(letter, string) {
    
    let str = string.toLowerCase();
    return str.split(letter.toLowerCase()).join("");
}
console.log('Letters deleted: ', deleteLetters('a', "blablabla"));



//Task#10
function isPalindrome(string) {
    let str = string.length;
    let result = '';
    for (let i = 0; i < str; i++) {
        if (string[i] === string[str - i - 1]) {
            result = 'This word is palindrome';
        } else {
            result = 'This word is not palindrome';
            return result;
        }
    }
    return result;
}
console.log(isPalindrome('qwertytrewq'));


//Task#11 
function deleteDuplicateLetter (string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
        if(string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
            str += string[i];
        }
    }
  return str;
}
console.log('Duplicate letters deleted: ', deleteDuplicateLetter("Бісквіт був дуже ніжним"));
