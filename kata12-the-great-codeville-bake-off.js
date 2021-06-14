/*
We need to complete a function called chooseRecipe(), 
which will receive three parameters: 
- An array of ingredients in stock at Bakery A 
- An array of ingredients in stock at Bakery B 
- An array of recipe objects. 

Each recipe has a name property(string) and an ingredient property(array)

Our chooseRecipe() function should return the name of the correct recipe.

There will always be a single correct answer, 
and you will NOT need to consider special cases. 
For example, you do NOT need to worry about cases where one bakery 
has BOTH the ingredients for a recipe.

We might want to start by creating a helper function called ingredientCheck() 
that will take in one bakery at a time, along with the recipes.ingredients array 
to check if the given bakery possesses any of the ingredients from that recipe.

Want a receipe that uses one ingredient from each bakery
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  
  let bakeryAB = bakeryA.concat(bakeryB);

  for (const recipe of recipes) {
    recipe.count = 0;
  }
  
  for (const recipe of recipes) {
    for (let x = 0; x < recipe.ingredients.length; x++) {
      for (let i = 0; i < bakeryAB.length; i++) {
        if (bakeryAB[i] === recipe.ingredients[x]) {
          recipe.count++; 
        }
      }
    } 
  }

  for (const recipe of recipes) {
    if (recipe.count >= 2) {
      return recipe.name;
    }
  }
  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*EXPECTED OUTPUT
Persian Cheesecake
Nima's Famous Dijon Raisins
*/