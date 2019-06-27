var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;
 	
 	if (currentClassName == 'blue') {
 		document.getElementById('cool').classList.remove('blue');
 	} else {
 		document.getElementById('cool').className = 'blue';
 	}
 }

var sayMyName = function(name) {
	alert('My name is: '+name);
};
var car = {   //liste von variablen mit eigenschaften und funktionen mit methoden
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels:4,
			seats: [
				'seat1',
				'seat2',
				'seat3',
				'seat4'
			],
			turnOn: function () {
				this.isTurnedOn = true; //setzt eigenschaft auf true
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car '+isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};

		console.log('hello there friends!');