// explanations

// Variables: string, array, number, boolean, object
// object can contain any of the variables itself

var favColor = 'red';
var myFavColors = ['blue', 'red', 'yellow'];
var numOfFavColors = 3;
var hasGotFavColors = true;
var richObject = {
	firstName: 'Rich',
	lastName: 'Armstrong',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 103,
	isMale: true
};

richObject.isMale

//Funktionen - mögliche Schreibweise

function whatIsMyFavColor () {

};

// Funktionen - bevorzugte Schreibweise

var whatIsMyFavColor = function () {
	return 'blue';
};
// nur ein return möglich, nach return stoppt die funktion

// following fkt doesnt return anything, but does write a string when called
var doSomething = function () {
	console.log("do Something!!!");
};

var area = function (width, height) {
	return width * height;
};

// IF ELSE

if (true)  {
	// do sth
};

if (10 < 100) || (20 < 200) {
	alert('true!!!');
} else if (10 == 100) && (20 == 200){
	alert('false!!!');
} else {
	alert('false!!!');
};
// || -> OR
// && -> AND
// == -> EQUALS




