// Your code here

const array = [1, 2, 3, -9]
function mapToNegativize(array){
  let arr = []
  for (let i = 0; i < array.length ;i++){
    arr.push(array[i] * -1)
  }
  return arr ;
}
 

function mapToDouble(array){
  let array1 = []
  for (let i = 0 ;i<array.length ; i++){
    array1.push(array[i] * 2)
  }
  return array1 ;
}

function mapToSquare(array){
  let array2 = []
  for (let i = 0 ;i<array.length ; i++){
    array2.push(array[i] * array[i])
  }
  return array2 ;
}


sourceArray = [1,2,3]
function reduceToTotal(sourceArray,total){
  for (let i = 0; i<sourceArray.length;i++){
    total = total + sourceArray[i]
  }
  return sum;
}

function reduceToTotal(sourceArray, startingPoint = 100){
  for (let i = 0; i < sourceArray.length ; i ++){
    let sum = startingPoint + sourceArray[0]
  }
  return sum
}

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length ; i ++){
    if (!sourceArray[i]){
      return false
    }
    else {
      return true
      
    }
  }
}
    
function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length ; i ++){
    if (sourceArray[i]){
      return true
    }
    else {
      return false
      
    }
  }
}

