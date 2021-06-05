//this part is for LOOPY LIGHTHOUSE assignment
/*
(multiple of 3; print Loopy)
multiple of 4 print Lighthouse 
multiple of 3 and 4 print LoopyLighthouse 
otherwise, print the number
*/
let x = 100;

for (x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 !== 0) {
    console.log("Loopy");
  } else if (x % 4 === 0 && x % 3 !== 0) {
    console.log("Lighthouse");
  } else if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else {
    console.log(x);
  }
}