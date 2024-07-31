const array = ['apple', 'banana', 'cherry'];
const obj = array.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});

console.log(obj); 
