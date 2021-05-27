const whichSchool = function (age) {
  if (age < 13) {
    //ELementary school should be the answer 
    return "Elementary School"; 
  } else if (13 <= age && 18 >= age) {
    //Secondary school should be the answer 
    return "Secondary School";
  } else { 
    return "Lighthouse Labs";
    }
};