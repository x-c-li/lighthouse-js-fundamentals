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

  output = ""

  function camel(){
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

  function pascal() {
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

  function snake() {
    for (let s = 0; s <input.length; s++) {
      if (input[s] === " ") {
        output += "_";
      } else {
        output += input[s];
      }
    }
    return output;
  }

  function kebab() {
    for (let s = 0; s <input.length; s++) {
      if (input[s] === " ") {
        output += "-";
      } else {
        output += input[s];
      }
    }
    return output;
  }

  function title() {
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

  function vowel() {
    for (let v = 0; v < input.length; v++) {
      if (input[v] === "a" || input[v] === "e" || input[v] === "i" || input[v] === "o" || input[v] === "u") {
        input = input.replace(input[v], input[v].toUpperCase());
      }
    } 
    output = input;
    return output;
  }
  
  function consonant() {
    for (let v = 0; v < input.length; v++) {
      if (input[v] !== "a" && input[v] !== "e" && input[v] !== "i" && input[v] !== "o" && input[v] !== "u") {
        input = input.replace(input[v], input[v].toUpperCase());
      }
    }
    output = input;
    return output;
  }

  function upper() {
    output = input.toUpperCase();
    return output;
  }

  function lower() {
    output = input.toLowerCase();
    return output;
  }

  var font = [camel, pascal, snake, kebab, title, vowel, consonant, upper, lower]
  
  let cas2 = [];
  
  if (typeof cas === "string") {
    cas2.push(cas);
  } else if (cas.length > 1) {
    for (let u = 0; u < cas.length; u++) {
      cas2.push(cas[u]);
    }
  } 
  
  //console.log(cas);
  console.log(cas2);
  
  /*
  for (let h = 0; h < font.length; h++) {
    for (let x = 0; x < cas2.length; x++) {
      if (cas2[x] === font[h]) {
        font[h]();
      }
    }
  }*/
  
    for(i = 0; i < font.length; i++){
      if(cas2 === font[i].name){
      font[i]();
      }
    }

}


//TEST CASES 
console.log(makeCase("this is a string", "camel")); //1
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