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

//Arryas & Loops CONFUSING  

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

// While Loops Hard 

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

        //Module 2 Exam Complete Passed! 

        // Week 3 
        document.getElementById("body").style.color = "red";

        //Styling a element with Java Script!

        var myClass = document.getElementsByClassName("special");
        for ( var i=0; i<myClass.length; i++){
           myClass[i].style.color= "red"
        }
        // If your styling multiple classes you have to use a forloop as show here for classes called myClass
        var myClass = document.getElementsByClassName("special");
        myClass[0].style.color = "red";
        // if you want to style a single class then use this code as it doesnt need to loop but only 1 speical class element will appear red as it doesnt loop.
        // because your getting [0] which is not i its the 1st like a array. This is called a collection of elements.
        // People refer to the elements in a HTML page as the DOM (Document Object Model)

        // DOM queryselector

        /* 
        <div id="special">
        <p class="someclass">Paragraph 1</p>
        </div>
        */
        var myText = document.querySelector("#special .someclass");
        myText.style.color= "red";
        // This line of code would find your div #special then find the class someclass

        /* 
        <div id="special">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        </div>
        */
        var myText = document.querySelectorAll("#special p");
        for (var i=0; i<myText.length; i++){
            myText[i].style.color = "red"
        }

        // Query Selector all allows you to get groups of elements

        // INNER HTML
        var myDiv = document.getElementById("special");
        myDiv.innerHTML ="<p>Hello this is brand new from JAVA!</p>"
        // inner HTML can be used to inject new HTML into the document you are editing. 

        var myCheckbox = document.querySelector("input"); // Creating a var assigning the vaule from the HTML doc
        myCheckbox.setAttribute("checked","checked"); // Setting the attribute "checked" to "checked"
        // Set attribute can be used to change HTML elements attributes as here showing a checkbox 

          // Adding Elements and Text
        var myTag = document.createElement("p");// Create a new <p> element and store it in the variable 'myTag'
        var myText = document.createTextNode("THIS IS MY NEW P Created in JAVA Script!");// Create a new text node containing the specified text and store it in 'myText'
        myTag.appendChild(myText);// Append the 'myText' node as a child to the 'myTag' <p> element
        var myDiv = document.querySelector("div");// Find the first <div> element in the HTML document and store it in 'myDiv'
        myDiv.appendChild(myTag);// Append the 'myTag' <p> element as a child to the 'myDiv' <div> element
        
         // Removing Divs 
        var myDiv = document.querySelector("div");
        myDiv.removeChild(myDiv.children[1]);

    // CATUPTING EVENTS!
// <button> Dont Press Me </button> 

var btn = document.querySelector("button"); //Selecting the Button 

function ouch(){
  alert ("Oh No you Didnt!"); // Alert 
}
btn.onclick = ouch; // once the button is pressed 

// will bring up a alert saying 'Oh no you didnt!' 

// Evenet listeners 

var btn = document.querySelector("button"); //Selecting the Button 

function ouch(){
  alert ("Oh No you Didnt!"); // Alert 
}
btn.addEventListener("click",ouch); // Adding a event listener that is looking for a click then it will run function 'ouch'

// Easier 

var btn = document.querySelector("button"); //Selecting the Button 

btn.addEventListener("click", function (){alert("I told you not too!")}); // Can get rid of the function tab and put it in here instead. 

// Envent Objects 

var btn = document.querySelector("button"); // Finding the Button 

btn.addEventListener("click", function(event){ //adding event listener for the "click" action. Function called "Event"
    event.target.style.backgroundColor = "red"; // On event target style background = "red"

    alert("I Told you not to press me!") // Produces a Alert to the user
})

var link = document.querySelector("a"); // Finding the a html element assign it to link

link.addEventListener("click",function (event){ // link add event listener which is a function for click then proceeds with function event 
event.preventDefault(); //event prevents the function 
alert("No Google for you!")// show alert 
});

//<form method="gets">
//<label>Your Name: <input type="text" name="name"></label>
//<input type="submit" value="send">
//</form>

var myForm = document.querySelector("form"); //getting the form assgining it to varible my form 
myForm.addEventListener("submit", function(event){ //my Form submit so once the form has been submitted 
    event.preventDefault(); //Preventing the E function 
    var formData = document.querySelector("input").value; //creating new var for the from data, using the input elements 
    alert(formData);// Presenting the Data to you as a alert 
})

// Mouse Over Elements

var heading = document.querySelector("h1") // getting the h1 element 
var box =document.querySelector("div") // getting the div element

box.addEventListener("mouseover", function(){ //when you mouse over the box (div) element
    heading.innerHTML="Mouse is over the box!"; // Change the H1 element to the text shown 
});

box.addEventListener("mouseout", function(){ // when mouse is out of the div 
    heading.innerHTML="Mouse is out of the box!)" // change the H1 element 
});

heading.addEventListener("mouseover", function(){ // heading mouse over
    heading.innerHTML = "Roll your mouse over the box!"; // Change the h1 element
});

// Scroll Events 

var pagetop; // Creating a var 
 
window.addEventListener("scroll", function(){ // adding a function which occurs when you scrolls
   pagetop = window.pageYOffset;// assinging the var a vaule of the pages yoffset 
   console.log(pagetop); // console logging it out to the user
})

window.addEventListener("resize",function(){ // Creating a var with event listner resize calls a function
    console.log(`The window width is ${window.innerWidth}`); //console log the width
    console.log(`The window height is ${window.innerHeight}`); // console log the height
 });
 // Capturing Key Events 
 document.addEventListener("keydown", function (key){ //event listening for keydowns function called key 
    alert(` ${event.key} Key was pressed!`); // Then shows a alert to the user saying what key they pressed 
})

// Scope in JS 

var aVar = "This is the Global Scope!"; // Declairing a Global Var 
function testScope(){ 
    var aVar ="This is the Local Scope!"; //Declairing a Local Varible inside a function
    console.log(aVar);
}
testScope();
console.log(aVar);

(function(){}()) // This will run a function in local scope not global
 
// Simple JS Scripts 

//Module 4! 
// Project 1 Miles to Kilometers 

document.getElementById("convert").addEventListener("submit", function (event){

    event.preventDefault();
	var distance = parseFloat(document.getElementById("distance").value);
    var answer = document.getElementById("answer");

	if (distance){
		var convert = (distance * 1.609344).toFixed(3);
		
		
		answer.innerHTML = `<h2>${distance} miles converts to ${convert} kilometers</h2>`;
    }
	else {
    
	 answer.innerHTML = "<h2>Please Provide a Number!</h2>"
	}
	});
// Project 2
var  convertType = "miles"; 
var  heading = document.querySelector("h1");
var intro = document.querySelector("p");
var asnwerDiv = document.getElementById("answer");
var form = document.getElementById("convert");

document.addEventListener("keydown", function(event){
var key = event.code;

if (key === "KeyK"){
	convertType = "kilometers";
	heading.innerHTML = "Kilometres to Miles Converter";
	intro.innerHTML = "Type in Kilometres and it will get tunred into Miles!";

}
else if (key === "KeyM"){
	convertType = "miles";
	heading.innerHTML = "Miles to Kilometres Converter";
	intro.innerHTML = "Type in Miles and it will get tunred into Kilometres!";
}
});

form.addEventListener("submit",function(event){
event.preventDefault();
var distance = parseFloat(document.getElementById("distance").vaule);

if (distance) {
if(convertType == "miles"){

var converted = (distance * 1.609344).toFixed(3);}
answer.innerHTML = `${distance} Miles Converts to ${converted} Kilometers`;
		}
else {
	answer.innerHTML = "<h2>Please provide a number!</h2>";

var converted = (distance * 0.621371192).toFixed(3);
answer.innerHTML = `${distance} Kilometres Converts to ${converted} Miles`
}

});
// This didnt work at all, said NA whenever submit was clicked... Needs Fixing!









// Helpful 

// Style a HTML Class 
var myClass = document.getElementsByClassName("special");
myClass[0].style.color = "red";





// CONFUSING SECTION HELP

var allPs = document.getElementsByTagName("p"); // Creating the varible and assgning all the p elements to allPs
for (var i=0; i<allPs.length; i++) { // for loop creating a var called i giving it the value of 0 then saying that allPs is greater than i the for
    allPs[i].style.color = "green" // Loop will stop, then after i++ making it increiment each time, then styling allPs and [i] color green 
}