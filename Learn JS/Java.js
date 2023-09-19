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

let firstLetterOfLastName = "";
const lastName2 = "Lovelace"; // so the question here it find the first letter of the LastName2 
firstLetterOfLastName = lastName2[0]; //quite a simple one, the value of firstLetterOfLastName will be L as thats the first character of LoveLace as used in LastName2


let myStr2 = "Jello World";
myStr2 = "Hello World"; //String can not be changed or added vaule they can only be changed by reassinging a new vaule, these are known as Immutable

const LastName2 = "Lovelace";
const thirdLetterOfLastName = lastName2[2]; // This i call is a grab, it pulls the third letter of Lastname2 keep in mind computers start counting from 0 so 1st will be 0 and so on+

const myLastName = "Matthews";
const lastLetterOfLastName = lastName[lastName.length - 1]; // use expression to find the last letter of the of the input 

mypet = "Dog"
mycat = "Cat"

animals = "My " + mypet + " is lovely but " + mycat + " is nasty! " 
console.log (animals) //you see here in this example we have printed text and varibles into one string that will be show on the console. becarful of spaces as JS is case sensative!

const myNameAndAge = ["Charlie", 22]; //You can assign string and intergers to a value as seen here. This is called a array 
const myArray = [["Charlie",22],["Jack", 21]]; // you can also nest arrays within other arrays, this is called multi-dimensional array

const myArray2 = [18, 64, 99];
myArray2 [0] = 45; //as you can see here we can change the vaules of the array remember the Computer counts 0 as 1 so it gots 0 1 2 3 4 

// Comment
/* Long Comment */

 //Booleans & If Else Statements 

 var red = true;
 var blue = false;
 var green;
 var myNum = 5;
 var otherNum = 5;

  if (red) {
            console.log ("statement is true!");
        } 
        else {
            console.log("the statement is false!");
        }
// This will print statement is true! if 'red' is changed to blue it will say the statements is false 

if (myNum == otherNum) { //using == on a string and a number if the same character say "5" to = 5 it will be true best to use === which is exact same 
    console.log ("statement is true!");
}
else {
    console.log("statement is false!");
}
// This comapre the two varibles to see if they are equal you can also use less that or greater than using the crocodiles you learned in school. > <

var colors = ["red","green","blue","yellow"];
var selectedColor = colors[3];

if (selectedColor == "red") {
    console.log("The Color is Red!")
}
else if (selectedColor == "blue"){
    console.log("The Color is Blue!");
}
else if (selectedColor == "green"){
    console.log("The Color is Green!");
}
else {
    console.log("The Color is Yellow!");
}
// This is using the else if statement to find the color selected by 'colors[3]'

// Swtichs 
var colors = ["red","green","blue","yellow"];
var selectedColor = colors [3];

switch (selectedColor){
    case "red": console.log ("the color is red");
    break;
    case "blue": console.log("the color is blue");
    break;
    case "green": console.log("the color is green");
    break;
    case "yellow": console.log("the color is yellow");
    break;
    default: console.log("There was a Error Try Again")
}
// && 

var goodMood = true;
var goodSleep = true; 

if (goodMood && goodSleep) //if these two vaules are the same both true we will get today is a good day! but if one or both is false we will not
{console.log("Today is a good day!")}
else {console.log("Today is a Bad Day!")};

// || 
var breakfast = true;
var lunch = true; // all of these would have to be false for it to show Im Hungry even if one is true youll got things are good. 
var dinner = true;

if ( gotbreakfast || gotlunch || gotdinner ){
    console.log ("Things are Good!")
   }
 else {
    console.log("IM HUNGRY!")
}

// LOOPS! 

for ( var i = 0; i <= 10; i = i+1){ 
console.log (i); // so this is a for loop, it takes the vaule i which is set to 0 checks if its greater that 10 then if not increments it
}

//Arryas & Loops CONFUSING AF 

var colors = ["red","blue","yellow","green","white","black"];

for (var i = 0; i < colors.length; i = i+1) {
    console.log(colors[i]); // Foreloop
}
// for of loop easier 

/* Types Of Loops 

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/ 

var food = ["grapes","salad","beans","bread","olives"];

for ( var eachItem of food) {
    console.log(eachItem);
}

var myString = "Here is a string of text!";

// Loops can also be used to get the length of a string 

for ( var i = 0; i < myString.length; i = i+1){
    console.log(myString[i]);
}

for (var eachColor of colors) {
    console.log(eachColor);
}

// While Loops Hard AF

var incrementor = 0;
var text = "";

while (incrementor < 10){
    text += "The Incrementor has gone up to " + incrementor + "\n";
    incrementor++;
}
console.log(text);

// Template Literals Easier 

var incrementor = 0;
var text = "";

while ( incrementor < 10){
    text += `the incrementor has gone up to ${incrementor} \n`;
    incrementor++;
}
console.log(text);

// STRUCTURED PROGRAMMING

myString = "I am really hungry for some"
myUpperString = myString.toLocaleUpperCase();

var reallyLocation =myString.search("really");
var specialWord = myString.substr (reallyLocation, 6);

specialWord = specialWord.toUpperCase();
var newString = myString = myString.replace("really", specialWord);
console.log (newString);

/* 
for (var i = 0; i<foods.length; i++){ // Hard 
    console.log(`${myString}, ${foods[i]}`)
} 
*/
/* 
for (var eachFood of foods){    //Easier 
   console.log(`${myString},${foods[eachFood]}`)
}
*/

var foods = ["cheese","pie","breakfast","lunch"]; //Still Dont Really Understand this ngl 
var myString = "Im really hungry for some";

for (var i=0; i<foods.length; i++){
   
if (i & 2 === 0){
 console.log(`${myString} ${foods[i].toUpperCase}`)
}
else {
    console.log (`${myString} ${foods[i]}`);
}
}

// Java Script Basic Challenges 
// See Page to Created in Folder

// Challenge 7 Still dont understand this, will take some getting used to 
var wholeNum = prompt("Give me a Whole Number!");
       
if (wholeNum < 10){
console.log("you entered a number more than 10!");

for (var i=0; i<10; i++)
console.log(`Here is the num_${i}`);
}
else if (wholeNum > 9){
    console.log ("Number is not high enough!")
}
else {
    console.log("Error In the System!")
}
//Challenge 8 i just dont understand at all...

//FUNCTIONS! 

function doStuff (){
    var myString = "Here is a string of text"
    var upperString = myString.toUpperCase();
    console.log(myString);
    console.log(upperString);  
  }
 // Passing and returning data  

 function upperMessage (message){
    var upperMessage = message.toUpperCase();
    console.log(upperMessage);
  }
  // Converts text of upperMessage to Uppercase Text 
  upperMessage('hello vadim!');

  function addNums(num1,num2){
    var sum = num1 + num2;
    console.log(sum);
    }
// Basic Adding sum script    
    addNums(329,421);
// retunring a varible     
    function returnSum(num1,num2){ //In 
        var sum = num1 + num2;
        return sum; // Out
    } // Returning sum to outside the function; 
    console.log(returnSum(10,5) ); //Num 1 and Num 2 
    //Useful Examples 

    function randomIntGen(min,max){
        var total = max - min + 1; // 2-6= 4 + 1 = 5
        console.log(total); // Shows you the total 
    }
    randomIntGen (2,6);

    function randomIntGen(min,max){
        var total = max - min + 1; // Set a min and max then add one to it 
        var randomNum = Math.random(); // Gives a random num 
        var randomVal = randomNum * total; // multiply the random number and the total 
        var rounded = Math.floor(randomVal); // rounds the randomVal to a whole number 
        var finalNum = min + rounded;// Takes the min vaule and addes it to the rounded 
    }
        console.log(finalNum); // Prints the random number to the console
        
    //Selecting Data from Arrays using a random data generator 
        var foods = ["cheese", "chicken", "grapes", "hamburgers"];

        function randomIntGen(min,max){   
        // Creating a random int from min and max.     
        return Math.floor((max - min + 1) * Math.random())+ min;
        // have no clue what this guy in the video is on about
        }
        console.log(foods[randomIntGen(0,3)]);