//Deep clone array using recursive function




function deepCopy(array) {
    let array2 = [];
  
    for (let element of array) {
      if (Array.isArray(element)) {
        array2.push(deepCopy(element));
      } else if (typeof element === 'object' && element !== null) {
        array2.push(deepCopyObject(element)); 
      } else {
        array2.push(element);
      }
    }
  
    return array2;
  }


function deepCopyObject(object) {
    let clonedObject = {};
  
    for (let key in object) {
      if (Array.isArray(object[key])) {
        clonedObject[key] = deepCopy(object[key]);
      } else if (typeof object[key] === 'object' && object[key] !== null) {
        clonedObject[key] = deepCopyObject(object[key]);
      } else {
        clonedObject[key] = object[key];
      }
    }
  
    return clonedObject;
  }



let array1 = [{ name: 'John' }];
let array2 = deepCopy(array1);

console.log(array1)
console.log(array2)

console.log(array1 === array2); // false
console.log(array1[0] === array2[0]); // false