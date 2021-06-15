/*KATA 15
Create a function named organizeInstructors 
that will receive an array of instructor objects, 
and will return a new object that has the following format:

{
  CourseName: [instructors]
} 

*/

const organizeInstructors = function(instructors) {
  // Put your solution here
  let final = {};

  for (const instructor of instructors) {
    //console.log(final);
    if (instructor.course in final) {
      final[instructor.course].push(instructor.name);
    } else {
      final[instructor.course] = [];
      final[instructor.course].push(instructor.name);
    }

  }

  return final;

};



//TEST CASES
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/* EXPECTED OUTCOME

{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}

{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}

*/