const arr1 = [1,3,2,1,4,3,5];
const arr2 = [];

function numCompare(num1, num2) {
  return num1 - num2;
}
arr1.sort();

console.log(arr1);

let point1 = 0;

for(let point2 = 1; point2 < arr1.length; point2++) {
  if(arr1[point1] !== arr1[point2]) {
    point1 ++;
    arr1[point1] = arr1[point2];
    // console.log(point1,point2);
    if(arr1[point1] === arr1[point2]) {
        arr1.slice(); 
    }
  }
  
}
console.log(arr1);





