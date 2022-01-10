const arr1 = [1,3,2,1,4,3,5];
const arr2 = [1,1,5,4,6,6,6,2,3,2,1,4,3,5];
const arr3 = ['cat', 'cat', 'dog', 'cat', 'lizard', 'duck']

function removeDup(array) {
  const result = [];
  const map = {};

  for(let i = 0; i < array.length; i++) {
    if(map[array[i]]) {
      continue;
    } else {
      result.push(array[i]);
      map[array[i]] = true;
    }
  }
  return result;
}

const output = removeDup(arr2);

console.log(output)