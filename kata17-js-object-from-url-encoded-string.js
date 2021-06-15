/*KATA 17 instructions
For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: 
key1=value1&key2=value2

So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain

Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}
*/


//INPUT
const urlDecode = function(text) {  

  let testString = ""

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "=" && text[i] !== "&") {
      testString += text[i];
    } else if (text[i] === "=" || text[i] === "&") {
      testString += "/";
    }
  }

  //console.log(testString);

  let newString = "";
  const whiteSpace = function(testString) {
    for (let x = 0; x < testString.length; x++) {
      if (testString[x] !== "%" && testString[x] !== "2" && testString[x] !== "0") {
        newString += testString[x];
      } else if (testString[x] == "%") {
        newString += ""; 
      } else if (testString[x] == "2") {
        newString += ""; 
      } else if  (testString[x] == "0"){
        newString += " ";
      }
    } 
    return newString;
  }

  testString = (whiteSpace(testString));

  let preobj = testString.split("/");
  //console.log(preobj);


  const separate = function(preobj) {
    
    let obj = {};
    
    for (let i = 0; i < preobj.length; i++) {
      obj[preobj[i]] = preobj[i + 1] ;
      i++;
    }
    return obj;
  }
  
  let finalProduct = separate(preobj);

  return finalProduct; 
  

};


//TEST CASES
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
EXPECTED OUTCOME 
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/


/*OLD CODE THAT I'M TOO SCARED TO TRASH 
YES I KNOW I HAVE GITHUB



  let newString = "";
  const whiteSpace = function(testString) {
    
    for (const tex of testString) {
      for (let x = 0; x < tex.length; x++) {
        if (tex[x] !== "%" && tex[x] !== "2" && tex[x] !== "0") {
          newString += tex[x];
        } else if (tex[x] == "%") {
          newString += ""; 
        } else if (tex[x] == "2") {
          newString += ""; 
        } else if  (tex[x] == "0"){
          newString += " ";
        }
      }
    }

    return newString;
  }
  */