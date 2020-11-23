function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num ** 2)
}


function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((total, num) => total += num) + startingPoint
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((total, value) => {
        if (!value) {
            return false
        } else {
            return true
        }
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((total, value) => {
        if (value) {
            return true
        } 
        return false
    })
}