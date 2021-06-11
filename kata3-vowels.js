
/*
In this exercise, we will be counting the number of vowels 
that appear in a given string. 
For this exercise, consider the following to be 
vowels: a, e, i, o, and u.
*/

const numberOfVowels = function(data) {
  // Put your solution here
  fullWord = []; 
  vowels = [];

  for (let i = 0; i < data.length; i++) {
    fullWord.push(data[i]);
  }

  for (let j = 0; j < fullWord.length; j++) {
    switch (fullWord[j]) {
      case "a":
        vowels.push(fullWord[j]);
        break;
      case "e":
        vowels.push(fullWord[j]);
        break;
      case "i":
        vowels.push(fullWord[j]);
        break;
      case "o": 
        vowels.push(fullWord[j]);
        break;
      case "u": 
        vowels.push(fullWord[j]);
        break;
    }
  }

  return vowels.length;
};


//TEST CASES
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/*
EXPECTED OUTCOME 
3
5
5
*/