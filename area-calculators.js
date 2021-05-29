//areas of 3 diff shapes: rectangles, triangles, circles 

const calculateRectangleArea = function (length, width) {
  
  let rectArea = "";
  
  if (length > 0 && width > 0) {
    rectArea = length * width;
  } else {
    return undefined;
  }
  return rectArea;
};

const calculateTriangleArea = function (base, height) {
  
  let triArea = "";
   
  if (base > 0 && height > 0) {
    triArea = base * height / 2;
  } else {
    return undefined;
  }
  return triArea;
};


const calculateCircleArea = function (radius) {
  
  let circArea = "";
  
  if (radius > 0) {
    circArea = Math.PI * radius * radius; 
  } else {
    return undefined;
  } 
  return circArea; 
};

//TESTING OUT THE FUNCTIONS

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined