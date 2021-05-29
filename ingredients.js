const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("PART 1: WHILE LOOP");

let x = 0;
while (x <= ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

console.log ("              ")
// Write a for loop that prints out the contents of ingredients:

console.log("PART 2: FOR LOOP");

for (i = 0; i <= ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log ("              ")

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("PART 3: LOOP BACKWARDS");

for (y = ingredients.length - 1; y >= 0 ; y--) {
  console.log(ingredients[y]);
}



