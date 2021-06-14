/*KATA 11 
In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume() needs a radius
coneVolume() needs a radius and a height
prismVolume() needs a height, a width, and a depth

The fourth function, totalVolume(), 
will receive an array containing the different shapes 
that make up a single attraction. 
The totalVolume function should use the previous three functions to 
calculate the total volume of an attraction.

*/

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  //finds volume of a sphere given radius
  return (4/3 * PI * (radius ** 3));
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  //finds volume of a cone given height and radius 
  return (PI * (radius ** 2) * (height/3));
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // finds volume of a prism given height, width, depth
  return (height * width * depth);
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  total = 0; 

  for (const solid of solids) {
    
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height);
    } else {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }

  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);


/*EXPECTED ANSWERS 
true
true
true
true
*/
