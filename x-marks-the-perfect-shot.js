const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  



const finalPosition = function(moves) {
  let movement = [0,0];
  for (const move of moves) {
    if (move === "north") {
        movement[1] = movement[1] + 1;
    } else if (move === "west") {
        movement[0] = movement[0] - 1;
    } else if (move === "east") {
        movement[0] = movement[0] + 1; 
    } else if (move === "south") {
        movement[1] = movement[1] - 1;
    }
  }
  return movement;
};

console.log(finalPosition(moves));