var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random");

var color1Value = color1.value;

// 1. Write code so that the colour inputs match the background generated on the first page load. 
function initColors(){
	color1.value = "#ff0000";
	color2.value = "#00ff00";
	setGradient();
}

// 2. Display the initial CSS linear gradient property on page load.
function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function randomNumber(){
	var randomColor = "00000";
	while(randomColor.length < 6){
		randomColor = Math.floor(Math.random()*16777215).toString(16); //in case randomColor length generated is 5
	}
	return randomColor;
}

function randomColors(){
	color1.value = "#" + randomNumber();
	color2.value = "#" + randomNumber();
	setGradient();		
}


initColors();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", randomColors);