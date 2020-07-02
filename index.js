// Your code 

//map-like
function mapToNegativize(arr){
  const newArr = []
  arr.forEach(ele => {
    newArr.push(ele*-1)
  });
  return newArr
}

function mapToNoChange(arr){
  const newArr = []
  for (const ele of arr) {
    newArr.push(ele)
  }
  return newArr
}
function mapToDouble(arr){
  const newArr = []
  for (const ele of arr) {
    newArr.push(ele*2)
  }
  return newArr
}
function mapToSquare(arr){
  const newArr = []
  for (const ele of arr) {
    newArr.push(ele**2)
  }
  return newArr
}

//reduce-like
function reduceToTotal(arr, start){
  (!!start) ? start : start = 0
  arr.forEach(ele => {
    start += ele
  });
  return start
}

function reduceToAllTrue(arr){
  let result = true
  arr.forEach(ele => {
    if(!!ele !== result){
      result = false;
    }
  });
  return result
}

function reduceToAnyTrue(arr){
  let result = false;
  arr.forEach(ele => {
    if(!!ele !== result){
      result = true;
    }
  });
  return result
}