//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    if(name === "Tyler") return true
    if(name !== "Tyler") return false
  }

isTyler(name)

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

  //Code Here
  function getName() {
    return prompt ("What is your name?")
  }

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(name) {
alert("Welcome, " + name)
}

welcome(getName());

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

//Parameters are placeholders, arguments are the data that is compiled in the placeholders

//////////////////PROBLEM 5////////////////////



//false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (a special Number value meaning Not-a-Number!)


  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(){
  return "Bildo"
}


//Now save the function definition of myName into a new variable called newMyName
  //Code Here
var newMyName = myName
//Now alert the result of invoking newMyName
alert(newMyName())


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
    return function(){
      return "Bildo"()
    }

}
outerFn();
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.

innerFn();
