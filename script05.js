function rotateRight(arr, positions) {
    
    positions = positions % arr.length;
    if (positions < 0) positions += arr.length;
  
    return arr.slice(-positions).concat(arr.slice(0, -positions));
  }
  
 
  const array = [1, 2, 3, 4, 5];
  const rotatedArray = rotateRight(array, 2);
  console.log(rotatedArray); 
  