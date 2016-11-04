//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function (name) {
  if (name === "Tyler") {
    return true;
  }
  return false;
};

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

  var getName = function() {
    var name = prompt("Enter name");
    return name;
  };


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  var welcome = function() {
    var name = getName();
    alert("Welcome, " + name);
  };


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

//A parameter is a variable that is part of the declaration of a function. An argument is the actual value passed into the function.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

// The six falsy values in JavaScript are 0, NaN, undefined, null, false, and "".
// To check if something is falsy you can write an if statement containing the thing to check. The if statement will evaluate to false if the value is falsy.

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here

var myName = function() {
  return "Kyle";
};


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var outerFn = function() {
  return function () {
    return "Kyle";
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();