// Your code here
function mapToNegativize(arr) {
  return arr.map((item) => item * -1)
}

function mapToNoChange(arr) {
  return arr.map(char => char)
}

function mapToDouble(arr) {
  return arr.map(item => item * 2)
}

function mapToSquare(arr) {
  return arr.map(item => item**2)
}

function reduceToTotal(arr, int=0) {
  return arr.reduce((total, item) => total + item, int)
}

function reduceToAllTrue(arr) {
 return arr.reduce((accum, item) => {
   return (accum && item) ? true : false
 })
}

function reduceToAnyTrue(arr) {
 return arr.reduce((accum, item) => {
   return (accum || item) ? true : false
 })
}
