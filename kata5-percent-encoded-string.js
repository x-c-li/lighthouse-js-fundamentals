/*KATA 5 

Create a function named urlEncode that will receive a string of words, 
and return that string with all of the whitespace characters converted to %20. 
If there is whitespace on the outside of the string, (see second test case) 
you should only replace the whitespace within the string.

Use some sort of looping. Do Not use String.prototype.replace
*/

const urlEncode = function(text) {
  // Put your solution here
  text = text.trim();
  
  let low = [];
  let together = "";

  for (let tex in text) {

    low.push(text[tex]);

    if (tex === 0 && text[tex] === " ") {
      low.splice(text[tex], 1,);
    } else if (text[tex] === " " && tex != 0 && tex != (text.length - 1)) {
      low.splice(tex, 1, '%20');
    }
  }
  
  //console.log(low);

  for (const lo of low) {
    together += lo;
  }

  return together;
};

/*
if (text[tex] === " " && tex != 0 && tex != (low.length - 1)) {
      low.splice(tex,1,'%20');
    }

for (var i = 0; i < low.length; i = i +1) {
    together = together + low[i];
  }
*/

//TEST CASES
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/* EXPECTED OUTCOME
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/