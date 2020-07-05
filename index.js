// Your code here
function mapToNegativize(sourceArray) {
  const negative = []
  for (let element of sourceArray) {
    negative.push(-element)
  }
  return negative
}

function mapToNoChange(sourceArray) {
  return sourceArray 
}

function mapToDouble(sourceArray) {
  const multiplied = []
  for (let element of sourceArray) {
    multiplied.push(element * 2)
  }
  return multiplied
}

function mapToSquare(sourceArray) {
  const squared = []
  for (let element of sourceArray) {
    squared.push(Math.pow(element, 2))
  }
  return squared
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  for (let element of sourceArray) {
    total += element
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  const truthyValues = []
  for (let element of sourceArray) {
    if (element) {
      truthyValues.push(element)
      if (truthyValues.length === sourceArray.length) {
        return true
      }
    } else {
      return false
    }
  }
}

function reduceToAnyTrue(sourceArray) {
  if (sourceArray.includes(true)) {
    return true
  } else {
    return false
  }
}