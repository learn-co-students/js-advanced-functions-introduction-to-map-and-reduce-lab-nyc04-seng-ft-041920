// Your code here
function mapToNegativize(arr) {
    const newArr = []
    arr.forEach(function(item) {
        newArr.push(-item)
    })
    return newArr
}; 

function mapToNoChange(arr) {
    return arr
};

function mapToDouble(arr) {
    const newArr = []
    arr.forEach(function(item) {
        newArr.push(item * 2)
    })
    return newArr
};

function mapToSquare(arr) {
    const newArr = []
    arr.forEach(function(item) {
        newArr.push(item * item)
    })
    return newArr
};

function reduceToTotal(arr, startingPoint=0) {
    let total = startingPoint
    arr.forEach(function(item) {
        total += item
    })
    return total
};

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === false) {
            return false
        }
    }
    return true
};

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === true) {
            return true 
        }
    }
    return false 
};