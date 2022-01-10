const arr1 = [1,1,5,4,6,6,6,2,3,2,1,4,3,5];
const arr2 = ['cat', 'cat', 'dog', 'cat', 'lizard', 'duck']

function removeDup(array) {
  return array.filter((el, index) => array.indexOf(el) === index)
}

console.log(removeDup(arr2));