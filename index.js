// Your code here
function mapToNegativize(arr) {
    const negativeArr = []
    for (let num of arr) {
        negativeArr.push(num * -1)
    }
    return negativeArr
}
function mapToNoChange(arr) {
    const noChangeArr = arr.slice()
    return noChangeArr
}
function mapToDouble(arr) {
    const doubledArr = []
    for (let num of arr) {
        doubledArr.push(num * 2)
    }
    return doubledArr
}

function mapToSquare(arr) {
    const squaredArr = []
    for (let num of arr) {
        squaredArr.push(num ** 2)
    }
    return squaredArr
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    for (let num of sourceArray) {
        startingPoint += num
    }
    return startingPoint
}
function reduceToAllTrue(sourceArray) {
    let falseCount = 0
    for (let bool of sourceArray) {
        if (bool === 0 || bool === false || bool === -0 || bool === null || bool === undefined || bool === NaN) {
            falseCount++
        } console.log(falseCount)
    } return (falseCount > 0 ? false : true)
}

function reduceToAnyTrue(sourceArray) {
    for (let bool of sourceArray) {
        if (bool === true) {
            return bool
        }
    }
    return false
}

