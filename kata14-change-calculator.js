/*
KATA 10 

Given 2 numbers -- total of transaction, amount of cash given 
both numbers are in diff (i.e., 10$ = 1000) 

Our function calculateChange should return an object 
which describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, 
we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty diff
Ten diff
Five diff
Two diff
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/


const calculateChange = function(total, cash) {
  
  let diff = cash - total;
  //console.log(diff);
  //console.log(typeof diff);
  let change = {};


  if (diff/2000 >= 1) {
    change["twentyDollar"] = Math.floor(diff/2000)
    diff -= change["twentyDollar"] * 2000
  }

  if (diff/1000 >= 1) {
    change["tenDollar"] = Math.floor(diff/1000);
    diff -= change["tenDollar"] * 1000;
  }

  if (diff/500 >= 1) {
    change["fiveDollar"] = Math.floor(diff/500);
    diff -= change["fiveDollar"] * 500;
  } 
  
  if (diff/200 >= 1) {
    change["twoDollar"] = Math.floor(diff/200);
    diff -= change["twoDollar"] * 200;
  }

  if (diff/100 >= 1) {
    change["oneDollar"] = Math.floor(diff/100);
    diff -= change["oneDollar"] * 100;
  }
  
  if (diff/25 >= 1) {
    change["quarter"] = Math.floor(diff/25);
    diff -= change["quarter"] * 25;
  }

  if (diff/10 >= 1) {
    change["dime"] = Math.floor(diff/10);
    diff -= change["dime"] * 10;
  }

  if (diff/5 >= 1) {
    change["nickel"] = Math.floor(diff/5);
    diff -= change["nickel"] * 5;
  } 
  
  if (diff/1 >= 1) {
    change["penny"] = diff/1;
    diff -= diff/1;
  }

  return change;

};


//TEST CASES
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


/* EXPECTED OUTPUT 

{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/

