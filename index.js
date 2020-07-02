function mapToNegativize(arr){
  const newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * -1 )
  }
  return newArr
}

function mapToNoChange(arr){
  return arr
}

function mapToDouble(arr){
  const newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2 )
  }
  return newArr
}

function mapToSquare(arr){
  const newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] ** 2 )
  }
  return newArr
}

function reduceToTotal(arr, sum=0){
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}

function reduceToAllTrue(arr){
  for (let i = 0; i < arr.length; i++){
    // if one value is falsey 
    if (!arr[i]){
      return false
    }
  }
  // if it gets to here, they are all true
  return true
}

function reduceToAnyTrue(arr){
  for (let i = 0; i < arr.length; i++){
    // if one value is truthy 
    if (!!arr[i]){
      return true
    }
  }
  // if it gets to here, they are all false
  return false
}