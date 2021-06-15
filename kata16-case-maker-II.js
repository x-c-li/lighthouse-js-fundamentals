/*
Create a function named makeCase 
that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, 
values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower

Our function should be able to handle all of these cases.

*/

const makeCase = function(input, cas) {
  // Put your solution here

  let output = ""

  const camel = function(input, output) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " " && input[i+1] !== " ") {
        output += input[i+1].toUpperCase();
        i++;
      } else {
        output += input[i];
      }
    }
    return output;
  } 

  const pascal =function(input, output) {
    input = input.replace(input[0], input[0].toUpperCase());
    for (let p = 0; p < input.length; p++) {
      if (input[p] === " " && input[p+1] !== " ") {
        output += input[p+1].toUpperCase();
        p++;
      } else {
        output += input[p];
      }
    }
    return output;
  }

  const snake =function(input, output) {
    for (let s = 0; s <input.length; s++) {
      if (input[s] === " ") {
        output += "_";
      } else {
        output += input[s];
      }
    }
    return output;
  }

  const kebab =function(input, output) {
    for (let s = 0; s <input.length; s++) {
      if (input[s] === " ") {
        output += "-";
      } else {
        output += input[s];
      }
    }
    return output;
  }

  const title = function(input, output) {
    input = input.replace(input[0], input[0].toUpperCase());
      
    for (let t = 0; t < input.length; t++) {
      if (input[t] === " ") {
        output += " " + input[t+1].toUpperCase();
        t++;
      } else {
        output += input[t];
      }
    }

    return output;

  }

  const vowel = function(input, output) {
    for (let v = 0; v < input.length; v++) {
      if (input[v] === "a" || input[v] === "e" || input[v] === "i" || input[v] === "o" || input[v] === "u") {
        input = input.replace(input[v], input[v].toUpperCase());
      }
    } 
    output = input;
    return output;
  }
  
  const consonant = function(input, output) {
    for (let v = 0; v < input.length; v++) {
      if (input[v] !== "a" && input[v] !== "e" && input[v] !== "i" && input[v] !== "o" && input[v] !== "u") {
        input = input.replace(input[v], input[v].toUpperCase());
      }
    }
    output = input;
    return output;
  }

  const upper = function(input, output) {
    output = input.toUpperCase();
    return output;
  }

  const lower = function(input, output) {
    output = input.toLowerCase();
    return output;
  }

  var font = [camel, pascal, snake, kebab, title, vowel, consonant, upper, lower]
  
  let cas2 = [];
  
  //turning all the "cases" into arrays 
  if (typeof cas === "string") {
    cas2.push(cas);
    //console.log("test")
  } else if (cas.length > 1) {
    for (let u = 0; u < cas.length; u++) {
      //console.log("test2")
      cas2.push(cas[u]);
    }
  } 


  //console.log(cas2[0]);

  for (let h = 0; h < cas2.length; h++) {
    for (let x = 0; x < font.length; x++) { 
      if (h === 0) {
        console.log("first");
        if (cas2[h] === font[x].name) {
          console.log("first-2");
          output = font[x](input, output);
        } 
      } else if (h > 0) {
        if (cas2[h] === font[x].name) {
          console.log("second");
          let endvar = output;
          console.log(endvar);
          output = font[x](endvar, output);
          console.log(output);
        }
      }
    }
    return output;
  }


  /*
  for (let h = 0; h < cas2.length; h++) {
    for (let x = 0; x < font.length; x++) {
      if (cas2[h] === font[x].name) {
        output = font[x](input, output);
      } 
    }
    return output;
  }
  */

}


//TEST CASES 
//console.log(makeCase("this is a string", "camel")); //1
//console.log(makeCase("this is a string", "pascal")); //2
//console.log(makeCase("this is a string", "snake")); //3
//console.log(makeCase("this is a string", "kebab")); //4
//console.log(makeCase("this is a string", "title")); //5
//console.log(makeCase("this is a string", "vowel")); //6
//console.log(makeCase("this is a string", "consonant")); //7
console.log(makeCase("this is a string", ["upper", "snake"])); //8


/*
EXPECTED OUTCOME

1. thisIsAString
2. ThisIsAString
3. this_is_a_string
4. this-is-a-string
5. This Is A String
6. thIs Is A strIng
7. THiS iS a STRiNG
8. THIS_IS_A_STRING
*/



/* ROUGH WORK THAT I WANT TO SAVE 
if (typeof cas === "string") {
    if (cas === "camel") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " " && input[i+1] !== " ") {
          output += input[i+1].toUpperCase();
          i++;
        } else {
          output += input[i];
        }
      }
    } else if (cas === "pascal") {
      input = input.replace(input[0], input[0].toUpperCase());
      for (let p = 0; p < input.length; p++) {
        if (input[p] === " " && input[p+1] !== " ") {
          output += input[p+1].toUpperCase();
          p++;
        } else {
          output += input[p];
        }
      }
    } else if (cas === "snake") {
      for (let s = 0; s <input.length; s++) {
        if (input[s] === " ") {
          output += "_";
        } else {
          output += input[s];
        }
      }
    } else if (cas === "kebab") {
      for (let s = 0; s <input.length; s++) {
        if (input[s] === " ") {
          output += "-";
        } else {
          output += input[s];
        }
      }
    } else if (cas === "title") {
      input = input.replace(input[0], input[0].toUpperCase());
      
      for (let t = 0; t < input.length; t++) {
        if (input[t] === " ") {
          output += " " + input[t+1].toUpperCase();
          t++;
        } else {
          output += input[t];
        }
      }
    } else if (cas === "vowel") {
      for (let v = 0; v < input.length; v++) {
        if (input[v] === "a" || input[v] === "e" || input[v] === "i" || input[v] === "o" || input[v] === "u") {
          input = input.replace(input[v], input[v].toUpperCase());
        }
      } 
      output = input;
    } else if (cas === "consonant") {
      for (let v = 0; v < input.length; v++) {
        if (input[v] !== "a" && input[v] !== "e" && input[v] !== "i" && input[v] !== "o" && input[v] !== "u") {
          input = input.replace(input[v], input[v].toUpperCase());
        }
      }
      output = input;
    } else if (cas === "upper") {
      output = input.toUpperCase();
    } else if (cas === "lower") {
      output = input.toLowerCase();
    }
  } else if (typeof cas === "array") {
    
    for (let a = 0; a < cas.length; a++) {
      
      if (cas[a] === "snake") {
        for (let s = 0; s <input.length; s++) {
          if (input[s] === " ") {
            output += "_";
          } else {
            output += input[s];
          }
        } 
      }

      if (cas === "upper") {
        output = output.toUpperCase();
      } 
      
      if (cas === "lower") {
        output = input.toLowerCase();
      }

    }
  } 

*/