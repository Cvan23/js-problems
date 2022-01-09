const arr1 = [1,3,2,1,4,3,5];


  for(let i = 0; i < arr1.length; i++) {

    for(let j = 0; j < arr1.length; j++) {
      if(i !== j) {
        if(arr1[i] === arr1[j]) {
          arr1.splice(j,1)
        }
      }
    }
  }

console.log(arr1);