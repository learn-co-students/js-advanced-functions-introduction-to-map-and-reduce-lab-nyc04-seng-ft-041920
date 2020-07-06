// Your code here
function mapToNegativize(arr) {
    let newArr = []
    arr.forEach(function(item) {
        newArr.push(-item)
    })
    return newArr
}

function mapToNoChange(arr) {
    
    return arr
}

function mapToDouble(arr) {
    let newArr = []
    arr.forEach(function(item){
        newArr.push(item * 2)
    })
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    arr.forEach(function(item){
        newArr.push(item * item)
    }) 
    return newArr
}

function reduceToTotal(arr, start=0){
    let total = start
    arr.forEach(function(item){
        total += item
    })
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false) {
            return false
        }

    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            return true
        }
    }
    return false
}