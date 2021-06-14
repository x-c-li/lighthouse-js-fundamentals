/*
Create a function named camelCase 
that will convert a string to camel case, and return the result.
*/

const camelCase = function(input) {
  // Your code here
  output = ""

  for (let i = 0; i < input.length; i++) {

    if (input[i] === " " && input[i+1] !== " ") {
      output += input[i+1].toUpperCase();
      i++;
    } else {
      output += input[i];
    }
  }

  return output;
};


//TEST CASES 
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* EXPECTED RESULTS 
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/