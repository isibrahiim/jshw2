// //1. Ask the user for his age and determine who he is: a child (0–2), a teenager (12–18), an adult (18_60), or a senior citizen (60– ...).
// let age = prompt("enter your age");
// if (age >= 0 && age <= 2) {
//   console.log("you are child", age);
// } else if (age >= 12 && age <= 18) {
//   console.log("you are a teenager", age);
// } else if (age >= 18 && age <= 60) {
//   console.log("you are an adult", age);
// } else if (age > 60) {
//   console.log("you are a you're senior citizen", age);
// }

// //2 Ask the user for a number from 0 to 9 and display a special character located on this key (1– !, 2–
// let number = prompt("enter a number");
// number = parseInt(number);
// if (number === 1) {
//   console.log("!");
// } else if (number === 2) {
//   number = parseInt(number);

//   console.log("@");
// } else if (number === 3) {
//   number = parseInt(number);

//   console.log("#");
// } else if (number === 4) {
//   number = parseInt(number);

//   console.log("$");
// } else if (number === 5) {
//   number = parseInt(number);

//   console.log("%");
// } else if (number === 6) {
//   number = parseInt(number);

//   console.log("^");
// } else if (number === 7) {
//   number = parseInt(number);
//   console.log("&");
// } else if (number === 8) {
//   number = parseInt(number);
//   console.log("*");
// } else if (number === 9) {
//   number = parseInt(number);
//   console.log("(");
// } else {
//   console.log("enter a valid number!");
// }

// //3. Ask the user for a three-digit number and check if it contains the same numbers
// let n1 = prompt("enter n1");
// n1 = parseInt(n1);
// let n2 = prompt("enter n2");
// n2 = parseInt(n2);
// let n3 = prompt("enter n3");
// n3 = parseInt(n3);

// if (n1 == n2 && n1 == n3 && n2 == n3) {
//   console.log("all the numbers are same");
// } else if (n1 == n2 || n1 == n3 || n2 == n3) {
//   console.log("two numbers are same");
// } else if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
//   console.log("The numbers are not the same");
// }

// //4 Ask the user for the year and check if it is a leap year or not. A leap year is either a multiple of 400, or a multiple of 4 and is not a multiple of 100.

// let year = prompt("enter a year");
// year = parseInt(year);
// if (year % 400 === 0) {
//   console.log("is a leap year");
// } else if (year % 4 === 0) {
//   console.log("is not a leap year");
// } else if (year % 100 === 0) {
//   console.log("is a leap year");
// } else {
//   console.log("try to enter a leap year");
// }

// //5. Prompt the user for a five-digit number and determine if it is a palindrome.
// let num = prompt("Enter any 5 Digit number:");
// let n = parseInt(num);
// while (n < 10000 && n > 99999) {
//   alert("The Number is not a five digit number");
//   num = prompt("Enter any 5 Digit number:");
//   n = parseInt(num);
// }
// let digit1 = n % 10;
// n = n / 10;
// let digit2 = n % 10;
// n = n / 10;
// let digit3 = n % 10;
// n = n / 10;
// let digit4 = n % 10;
// let digit5 = n / 10;
// if (parseInt(digit1) == parseInt(digit5)) {
//   if (parseInt(digit2) == parseInt(digit4)) {
//     console.log(num + " is a Palindrome ");
//   }
// } else {
//   console.log(num + " is not a Palindrome ");
// }

// //6  Write a currency converter. The user enters the amount of USD, chooses which currency he wants to transfer EUR, UAN or AZN, and receives the corresponding amount in response
// let amount = prompt("enter amount");
// let a = parseInt(amount);
// let currency = prompt(
//   "plz choose a currency To convert: 1: for Euro , 2: UAH  and 3: AZN"
// );
// let no = 0;
// if (parseInt(currency) === 1) {
//   no = 0.87;
//   console.log(a * no);
// } else if (parseInt(currency) === 2) {
//   no = 27.59;
//   console.log(a * no);
// } else if (parseInt(currency) === 3) {
//   no = 1.7;
//   console.log(a * no);
// } else {
//   console.log("plz enter a valid number from 1 to 3");
// }

//7.Request the purchase amount from the user and withdraw the amount to be paid with a discount: from 200 to 300 - the discount will be 3%, from 300 to 500 - 5%, from 500 and above - 7%.

// let purchaseAmount = prompt("enter a purchase amount");
// purchaseAmount =parseInt(purchaseAmount);
// let discount = 0;
// if (purchaseAmount >= 200 && purchaseAmount <= 300 ) {
//   discount = 0.03;
//   let rest = purchaseAmount-(purchaseAmount*discount)
//   console.log("discount of ", purchaseAmount*discount ,"your rest is:",rest);
// }


//8.Ask the user for the circumference and perimeter of the square. Determine if such a circle can fit into the specified square.
// let circumPerimeter = prompt("enter a circumference of the square ");
// // c = a*4;
// let c = circumPerimeter*4;
// // The circumference of a circle is 2 pi (r) 
// console.log("circumference of square",c);
// console.log("circumference of circle",2*circumPerimeter*3.142);



//9.Ask the user 3 questions, each question has 3 answer options. For each correct answer 2 points are awarded. After the questions, display the number of points to the user.



//10.Request a date (day, month, year) and display the date following it. Consider the possibility of moving to the next month, year, and leap year



