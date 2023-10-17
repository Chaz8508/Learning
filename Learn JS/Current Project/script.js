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