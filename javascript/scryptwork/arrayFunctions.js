//recreating .forEach method

function forEach(array, callback) {
    for (arr of array){
        callback(arr)
    }
    
}

//recreating .map method

function Map(array, callback) {
    let newArray  = [];
    for (let i = 0; i < array.length; i++) {
        const val = (callback(array[i], i, arr));
        newArray.push(val);
    }
    return newArray;
}


//recreating .filter method 

function filter(array, callback) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++ ){
        callback(array[i], i , arr);{
        filteredArray.push(array[i])
    
        }
        return filteredArray;
    }
    
}

// recreating .some method

function some(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)=== true) {
            return true;
        }
    }
    return false;
}

// recreating .every method

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array) === false) {
            return false;
        }
    }
    return true;
}

// recreating .find method

function find(array, callback) {
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) === true) {
            return arr[i];
        }
    }
}


// recreating .findIndes method

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            return i;
        }
    }
    return -1;
}


// recreating .reduce method

function reduce(array, accumulator, nextElement)