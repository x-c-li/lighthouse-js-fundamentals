/*KATA 5 INTRO 
We need to write a function called whereCanIPark() that returns the coordinates 
of an available parking spot for the vehicle, 
or returns false if there is no available spot. 
Our function receives an array of arrays representing parking spots, 
and a string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

Regular cars can only park in R spots.
Small cars can park in R or S spots.
Motorcycles can park in R, S, or M spots.
In the array of parking spots, spots are written in both lower-case and upper-case. 
An upper-case letter means that the particular spot is AVAILABLE, 
while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. 

*/

const whereCanIPark = function (spots, vehicle) {
  // Code here!
    
  //const key = Object.keys(spots); // x-values
  let x = 0;
  let y = 0;
  let final = [];

  for (let j = 0; j < spots.length; j++) {
    for (let i = 0; i < spots[j].length; i++) {    
      if (vehicle === "regular" && spots[j][i] === "R") {
        x = i;
        y = j;
        final.push(x,y);
        return final;
      } else if (vehicle === "small" ) {
        if (spots[j][i] === "R" || spots[j][i] === "S") {
          x = i;
          y = j;
          final.push(x,y);
          return final;
        } else {
          return false;
        }
      } else if (vehicle === "motorcycle" && (spots[j][i] === "R" || spots[j][i] === "S" || spots[j][i] === "M")) {
        x = i;
        y = j;
        final.push(x,y);
        return final;
        } 
      }
  }

  if (final === []) {
    return false;
  }
  
};

/*


if (spots[j][i] === "R" || spots[j][i] === "S")) {
        x = i;
        y = j;
        final.push(x,y);
        return final;
        } else if () {
          
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


WE'RE ROOTING FOR YOU
const judgeVegetable = function (vegetables, metric) {
  
  var largestVal = 0;
  var largestValSubmitter = "";
  
  for (const veg of vegetables) {

    var currVal = veg[metric];
    var currSubmitter = veg.submitter;

    if (currVal >= largestVal) {
      largestVal = currVal;
      largestValSubmitter = currSubmitter;
    }

  }
  return largestValSubmitter;
};

if (vehicle[0] === "r") {
        if (spots[j][i] === "R") {
          x = i;
          y = j;
          final.push(x, y);
          break;
        }
      } else if (vehicle[0] === "s") {
        if (spots[j][i] === "R" || spots[j][i] === "S") {
          x = i;
          y = j;
          final.push(x, y);
          break;
        }
      } else if (vehicle[0] === "m") {
        if (spots[j][i] === "R" || spots[j][i] === "S" || spots[j][i] === "M") {
          x = i;
          y = j;
          final.push(x, y);
          break;
        }
      }
*/

//TEST CASES
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))



/*EXPECTED OUTCOME 
[4, 0]
false
[3, 1]
*/
