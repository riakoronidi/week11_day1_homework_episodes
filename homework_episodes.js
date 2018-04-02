// Episode 1
//set name as global variable
var name = 'Keith';

//function prints message with name
var printName = function() {
  console.log('My name is ' + name );
};

printName();
// prints:
// My name is Keith


// Episode 2
//set score as global constant
score = 5;

//function changes score value and return score
var result = function() {
//changes score to 3 in the function
  var score = 3;
  return score;
};

// return score as 3 since this is changed in result()
console.log(result());
// prints:
// 3



// // Episode 3
//creates array myAnimals
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  // changes the array
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  // go thru the array and print each index number and the value of each index
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// prints:
// 0: Ducks
// 1: Dogs
// 2: Lions


// // Episode 4
//set variables for 4 suspects
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  // change suspectThree to Keith in the function and return message for all suspects
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

//return all suspect thru the function allSuspects()
allSuspects();
// return suspectThree as declared as global variable
console.log( 'Suspect three is:' + suspectThree );
// prints:
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is: Keith


// // Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

//return the name as declared above, ie.Ace Ventura
var printName = function(detective) {
  return detective.name
};

//changes the name of detective hash to Poirot and return that
var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// prints:
// Poirot


// // Episode 6
//set murderer as rick in global variable
var murderer = 'rick';

var outerFunction = function() {
  //update murderer to marc when running the function outerFunction()
  var murderer = 'marc';

  var innerFunction = function() {
    //update murderer to marc when running the function innerFunction()
    murderer = 'valerie';
  }

  innerFunction();
}

//running the function will not affect the global variable erik which will be return in the console.log below
outerFunction();
console.log('the murderer is', murderer);
// prints:
// the murderer is rick



// Episode 7 - Make up your own episode/s!
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

const planet = "Earth";

const getSatellite = function() {
  satellite = "Moon";
};


const getStar = function() {
  const star = "Sun";

  getSatellite();
  const innerPlanet = function() {
    console.log('We live on planet ' + planet)
    console.log('First natural satellite of ' + planet + ' is '  + satellite);
    console.log(planet + ' resolves around the ' + star);
  };

  innerPlanet()
};

getStar();

//prints:
// We live on planet Earth
// First natural satellite of Earth is Moon
// Earth resolves around the Sun
