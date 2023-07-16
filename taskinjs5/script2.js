//Clone Array

function copy(array) {
    return [...array];
  }

let array1 = [1, 2, 3];
let array2 = copy(array1);

console.log(array1)
console.log(array2)

console.log(array1 === array2);
console.log(array1[0] === array2[0]);