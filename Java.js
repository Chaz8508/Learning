console.log = "Hello"; 
// I will be learning Java  
var Num1 = 1;
var Num2 = 5;// You Can assing Varibles Diffrent values 
var A = Num1 + Num2;// Inputting a Data Type Varible setting the name of that to Num1 and the value as 1 
var name ="Charlie"; // Here i can input a string varible using the quote marks 
console.log = Num1;
let Num3 = 10; // Let is another way or adding a varible to the code, it allows you to change the varible 
const Num4 = 15; // Const does the same thing but it does not allow you to change the varible it is CONSTANT
const Num5 = 12 - 6; // You can also use maths to workout the vaule of a varible
const Num6 = 8 * 0; // JS uses the * symbol to multiply the data
const Num7 = 8 / 4; // JS uses / for division 
Num1++; // Not really 100% sure on this code not very well explained all i know is it adds 'one'
Num1--; // It also works the same with with Taking 'one' away
let Decimal = 5.3; // These are called floats (Decimal)

//Assignements ------------------------------------------

// If we have a varible such 
let Num8 = 2; //This Number 8 Varible = 2, due to it being a let varible we can add to it.
Num8 += 6; //This is a assignment we are assigning a vaule to that varible seeing as that varible already = 2 adding 6 to it makes it 8
console.log (Num8); // we can Print this Varible in the Console to check the new Value 

// This also works both ways for Taking away -
let Num9 = 8;
Num9 -= 4;
console.log (Num9);
// For example see above if this was put into a console the vaule would be = 4 

// Also works for multiplication
let Num10 =2; 
Num10 *= 5;
console.log(Num10); 
// 5 * 2 = 10 

// Same for Division 
let Num11 =8; 
Num11 /= 2;
console.log(Num11)
// 8 / 2 = 4

// Strings ------------------------------------------
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr)
// This wasnt very clear to me in the tutorial, all i know is you can break out of the double quote by using a backslash.

// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	backspace
// \f	form feed

// Theses are used to constimise strings and how they are shown to the user. 

const MyName = "Charlie";
const Mystr ="My Name Is" + MyName + "and I am Well!";
// You can add Strings to Varibles and add them into code as show above treat the + as a space 
let First ="Learning Code is";
let Second ="fun but hard!"
// see the two varible types here i am chaging so it has to be let
First += Second; //we can add two strings together to make a sentence as seen here. 
console.log(First,Second) // Can print it as shown 

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length; 
//See here we are using the .length code to count how many characters are in "Lovelace" which is 8 and using it for the vaule of lastnamelength