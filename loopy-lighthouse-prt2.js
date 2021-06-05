const loopyLighthouse = function(range, multiples, words) {
  
  let start = range[0];
  let end = range[range.length - 1];

  let mult1 = multiples[0];
  let mult2 = multiples[multiples.length - 1];

  let word1 = words[0];
  let word2 = words[words.length - 1];
  
  for (let i = start; i <= end; i++) {
    //console.log(i);
    if (i % mult1 === 0 && i % mult2 !== 0) {
      console.log(word1);
    } else if (i % mult2 === 0 && i % mult1 !== 0) {
      console.log(word2);
    } else if (i % mult2 === 0 && i % mult1 === 0) {
      console.log(word1 + word2); 
    } else {
      console.log(i);
    }
  }

};



loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
/*
The loopyLighthouse function should log to the console all the numbers from 15 to 90, 
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", 
and multiples of 2 and 5 with "BattyBeacon".
*/