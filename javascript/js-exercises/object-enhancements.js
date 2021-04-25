//refactor the code to mees ES2015 standards - Identical keys and values.
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

//solution
const createInstructor = (firstName, lastName) => {firstName, lastName}

//refactor the code to mees ES2015 standards - Computed Property names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

//solution
let favoriteNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'This is my favorite'
}


//refactor the code to mees ES2015 standards - Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  //solution
  const instructor = {
      firstname: 'Colt',
      sayHi() {return 'Hi!'},
      sayBye() {return this.firstName + ' says bye!';}
  }

// //Write a function which generates an animal object. The function should
// accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’) verb: a string used to name a
// function (‘bark’, ‘bleet’) noise: a string to be printed when above function
// is called (‘woof’, ‘baaa’) Use one or more of the object enhancements we’ve
// covered.

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {return noise}
    }
}
