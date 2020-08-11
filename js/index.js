/**********************************************************************************************************************
                                     ************HOMEWORK TWO************
***********************************************************************************************************************/

/**********************************************************************************************************************
 1. Ask the user for his age and determine who he is: a child (0–2), a teenager (12–18), an adult (18_60), 
                                  or a senior citizen (60– 
***********************************************************************************************************************/

let userAge = prompt("plz enter your age To Verify");
if (userAge >= 0 && userAge <= 2) {
  console.log(`You are a Child ${userAge}`);
} else if (userAge >= 12 && userAge <= 18) {
  console.log(`You are Teenager ${userAge}`);
} else if (userAge >= 18 && userAge <= 60) {
  console.log(`You are Adult ${userAge}`);
} else if (userAge > 60) {
  console.log(`you are a you're senior citizen ${userAge}`);
}

/*********************************************************************************************************************
 2 Ask the user for a number from 0 to 9 and display a special character located on this key (1– !, 2– @, 3– #, etc.).
**********************************************************************************************************************/

let number = parseInt(prompt("enter a number To display a special character located on this key"));

if (number === 1) {
  console.log("!");
} else if (number === 2) {
  console.log("@");
} else if (number === 3) {
  console.log("#");
} else if (number === 4) {
  console.log("$");
} else if (number === 5) {
  console.log("%");
} else if (number === 6) {
  console.log("^");
} else if (number === 7) {
  console.log("&");
} else if (number === 8) {
  console.log("*");
} else if (number === 9) {
  console.log("(");
} else {
  console.log("enter a valid number!");
}

/*********************************************************************************************************************
 3. Ask the user for a three-digit number and check if it contains the same numbers
**********************************************************************************************************************/

let UserDigits = prompt("Plz Enter three Digits To check if it contains the same numbers");

let dig1 = UserDigits[0];
let dig2 = UserDigits[1];
let dig3 = UserDigits[2];

if (dig1 == dig2 && dig1 == dig3 && dig2 == dig3) {
  console.log("All The Numbers are Same");
} else if (dig1 == dig2 || dig1 == dig3 || dig2 == dig3) {
  console.log("Two  Numbers are Same");
} else if (dig1 !== dig2 && dig1 !== dig3 && dig2 !== dig3) {
  console.log("The Numbers are Not Same");
}

/*********************************************************************************************************************
      4 Ask the user for the year and check if it is a leap year or not. A leap year is either a multiple of 400,
                              or a multiple of 4 and is not a multiple of 100.
**********************************************************************************************************************/
let year = parseInt(prompt("enter a year To check if it is a leap year or not"));

if (year % 400 === 0) {
  console.log("is a leap year");
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log("is a leap year");
} else {
  console.log("it's not a leap yearr");
}


/*********************************************************************************************************************
      5.Prompt the user for a five-digit number and determine if it is a palindrome.
**********************************************************************************************************************/

let digitNo = prompt("Plz Enter a five-digit number To determine if it is a palindrome or not");

let firstDigit = digitNo [0];
let secondDigit =digitNo [1];
let thirdDigit = digitNo [2];
let fourthDigit =digitNo [3];
let fifthDigit = digitNo [4];

if(firstDigit== fifthDigit && secondDigit == fourthDigit){
  console.log("is a palindrome!");
}
else{
  console.log("is not a palindrome");
}

/*********************************************************************************************************************
6.Write a currency converter. The user enters the amount of USD, chooses which currency he wants to transfer EUR,UAN 
                    or AZN, and receives the corresponding amount in response.
**********************************************************************************************************************/
let currence = parseInt(prompt("Plz Enter Amount in USD"));
let convertion = prompt("Plz choose a currency To convert: 1:Euro, 2:UAN  and 3: AZN");
let convertionRate = 0; 
if(convertion == 'euro' || convertion == 'Euro' || convertion == 'EURO' || convertion == 1 ){
  convertionRate = 0.87;
}
  else if(convertion == 'uan' || convertion == 'Uan' || convertion == 'UAN' || convertion == 2 ){
    convertionRate = 27.59;
  }
  else if(convertion == 'azn' || convertion == 'Azn' || convertion == 'AZN' || convertion == 3 ){
    convertionRate = 1.7;
  }
  else {
      alert(`PLZ NOTE: the currencies are: Euro, UAN  and AZN You can simply choose numbers from 1 to 3 Respectively
      Thanks!`);
    }
    console.log(`${currence} is equal to ${currence * convertionRate} AZN`);

/*********************************************************************************************************************
   7.Request the purchase amount from the user and withdraw the amount to be paid with a discount: from 200 to 300 - 
                     the discount will be 3%, from 300 to 500 - 5%, from 500 and above - 7%.
**********************************************************************************************************************/
let purchaseAmount = parseInt(prompt("Enter a Purchase Amount"));
let disc = 0;
if (purchaseAmount >= 200 && purchaseAmount <= 300){
  disc = 0.03;
}
else if(purchaseAmount >= 300 && purchaseAmount <= 500){
  disc = 0.05
}
else if (purchaseAmount >= 500){
  disc = 0.07;
}
console.log(purchaseAmount- purchaseAmount*disc);
/*******************************************************************************************************************************
8.Ask the user for the circumference and perimeter of the square. Determine if such a circle can fit into the specified square.
********************************************************************************************************************************/
let circumference = parseInt(prompt("Enter the Circumference"));
let perimeter =  parseInt(prompt("enter the perimeter"));
let sideLength = perimeter / 4;
let rad = Math.floor(circumference * Math.PI);
let diameter = rad * 2;
if (diameter <= sideLength){
  console.log('The Circle Can Fit!');
} else {
  console.log("The Circle Canot Fit!");
}

/*******************************************************************************************************************************
9.Ask the user 3 questions, each question has 3 answer options. For each correct answer 2 points are awarded. After the questions,
                                       display the number of points to the user.
********************************************************************************************************************************/

let question1 ="what country is BMW from? 1- Germany, 2- UK, 3- China";
let question2 = "what is the capital of Ukraine? 1-Moscow, 2-Kiev, 3-London";
let question3 = "what programming language can browser read? 1- Haskle, 2--Java, 3- JavaScript";

let answer1 =prompt(question1);
let answer2 =prompt(question2);
let answer3 =prompt(question3);

let points = 0;
 if(answer1 == '1'){
   points += 2;
 }
 
 if (answer2 =='2'){
  points += 2;
 }

 if (answer3 == '3'){
  points += 2;
 }
alert(`You have got ${points} Marks`)
 console.log(points);
/*******************************************************************************************************************************
10. Request a date (day, month, year) and display the date following it. Consider the possibility of moving to the next month, 
                                                      year, and leap year.
********************************************************************************************************************************/