// Your code here

const array = [1, 2, 3, -9]
function mapToNegativize(array){
  let arr = []
  for (let i = 0; i < array.length ;i++){
    arr.push(array[i] * -1)
  }
  return arr ;
}
 
dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
function mapToNoChange(dune){
  let dune1 = []
  for (let i = 0 ;i<dune.length ; i++){
    dune.push(dune[i])
  }
  return dune1 ;
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
function reduceToTotal(sourceArray,sum = 0){
  for (let i = 0; i<sourceArray.length;i++){
    sum = sum + sourceArray[i]
  }
  return sum;
}

function reduceToTotal(sourceArray, startingPoint = 100){
  for (let i = 0; i < sourceArray.length ; i ++){
    let sum = startingPoint + sourceArray[0]
  }
  return sum
}



