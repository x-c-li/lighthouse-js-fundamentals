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
  // Put your solution here
  
  let obj = {} 

  let preobj = text.split("=");
  console.log(preobj);

  const separate = function(preobj) {
    for (let i = 0; i < preobj.length; i++) {
      obj[preobj[i]] = preobj[i + 1] ;
    }
    return obj;
  }
  
  console.log(separate(preobj));

};


//TEST CASES
console.log(urlDecode("duck=rubber"));
//console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
EXPECTED OUTCOME 
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/