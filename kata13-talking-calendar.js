/*
Create a function named talkingCalendar that takes in a date string 
with the format YYYY/MM/DD, 
and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function(date) {

  list = date.split("/"); //splits up input into [year, month, day] 
  list2 = [];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", 'September', "October", "November", "December"]
  monthFinal = ""; 
  day = "";

  for (const li of list) {
    list2.push(Number(li));
  }
  
  for (let i = 0; i < months.length; i++) {
    if ((list2[1] - 1) === i ) {
      monthFinal += months[i];
    }
  }
  
  for (let j = 0; j < 31; j++) {
    if (list2[2] === j) {
      if (list[2] === 1 || list[2] === 21) {
        day = list2[2] + "st, ";
      } else if (list2[2] === 2 || list2[2] === 22) {
        day = list2[2] + "nd, ";
      } else if (list2[2] === 3 || list2[2] === 23) {
        day = list2[2] + "rd, ";
      } else {
        day = list2[2] + "th, "
      }
    } 
  }

  return monthFinal + " " + day + " " + list[0];
  
};

//TEST CASES
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
EXPECTED OUTPUT
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/