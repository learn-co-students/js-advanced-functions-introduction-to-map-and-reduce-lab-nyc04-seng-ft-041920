// Your code here

function mapToNegativize(array){
    const newArray = []
    array.forEach(item => {
        newArray.push(item * -1)
    })
    return newArray
}


function mapToNoChange(array){
    const newArray = []
    array.forEach(item => {
        newArray.push(item)
    })
    return newArray
}

function mapToDouble(array){
    const newArray = []
    array.forEach(item => {
        newArray.push(item * 2)
    })
    return newArray
}


function mapToSquare(array){
    const newArray = []
    array.forEach(item => {
        newArray.push(item **2)
    })
    return newArray
}


function reduceToTotal(array, starting=0){
    let sum = starting;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum; 
}

function reduceToAllTrue(array){
    for(let i =0; i<array.length; i++){
        if(!array[i]){
            return false;
        }
    }
    return true 
}


function reduceToAnyTrue(array){
    for(let i =0; i<array.length; i++){
        if(array[i]){
            return true;
        }
    }
    return false 
}