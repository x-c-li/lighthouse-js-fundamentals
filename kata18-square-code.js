/* KATA 18 INTRO STUFF (kinda confusing)
In Square Code, the spaces are removed from the english text and 
the characters are written into a square (or rectangle). 
For example, the sentence "If man was meant to stay on the ground god would have given us roots" 
is 54 characters long, once the spaces are removed, 
so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots

The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. 
If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. 
If we use that for the number of characters on each line (the number of columns), 
then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. 
For example, the message above is coded as:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghns sseoau

*/


const squareCode = function(message) {
  // Put your solution here
  
  
  const noSpaces = function(message) {
    let noSpacesString = ""; 

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        noSpacesString += "";
      } else {
        noSpacesString += message[i];
      }
    }

    return noSpacesString;
  }

  noSpacesString = noSpaces(message);

  //finds square root of the string and assigns to stringSqrt
  let stringSqrt = Math.ceil(Math.sqrt(noSpacesString.length));
  //console.log(stringSqrt); //testing to see if it worked 
  
   
  let stringSquare = ""; 
  
  for (let j = 0; j < noSpacesString.length; j++) {
    for (let k = 0; k < stringSqrt; k++) {
      if (j < noSpacesString.length) {
        stringSquare += noSpacesString[j];
        j++;
      } 
    } 
    stringSquare += "\n";
    j = j - 1
  }

  //console.log(stringSquare);

  
  let finalString = ""; 
  
  for (let s = 0; s < stringSquare.length; s++) {    
    if (s < stringSqrt) {
      for (let g = s; g < stringSquare.length; g++) {
        if (stringSquare[g] !== "\n") {
          finalString += stringSquare[g]
          g = g + stringSqrt; 
        }
      }
  
      finalString += " "
    }
  }
  
  return finalString;


};


//TEST CASES
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


/*
EXPECTED OUTPUT
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/