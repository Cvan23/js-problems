const arr1 = [1,3,2,1,4,3,5];

function removeDup(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(i !== j) {
        if(array[i] === array[j]) {
          array.splice(j,1)
        }
      }
    }
  }
  return array;
}
console.log(removeDup(arr1));