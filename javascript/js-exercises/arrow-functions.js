// Refactor the code below into ES2015 versionP:
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

//Solution
const double = array => array.map(val => val * 2)
}


// Refactor the folloowing function to use arrow functions:
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  //Solution
const squareAndFindEvens = numbers => numbers.map(n => n**2).filter(s => s % 2 === 0)

