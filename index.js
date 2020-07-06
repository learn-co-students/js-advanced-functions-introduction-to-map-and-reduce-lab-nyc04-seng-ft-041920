// Your code here

function mapToNegativize(sourceArray) {
  const newArray = [];
  sourceArray.forEach((item) => {
    newArray.push(item * -1);
  });
  return newArray;
}

function mapToNoChange(sourceArray) {
  const newArray = [];
  sourceArray.forEach((item) => {
    newArray.push(item);
  });
  return newArray;
}

function mapToDouble(sourceArray) {
  const newArray = [];
  sourceArray.forEach((item) => {
    newArray.push(item * 2);
  });
  return newArray;
}

function mapToSquare(sourceArray) {
  const newArray = [];
  sourceArray.forEach((item) => {
    newArray.push(item * item);
  });
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let sum = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    sum += sourceArray[i];
  }
  return sum;
}

function reduceToAllTrue(sourceArray) {
  //   sourceArray.forEach((element) => {
  //     if (!element) {
  //       return false;
  //     }
  //   });
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      return true;
    }
  }
  return false;
}
