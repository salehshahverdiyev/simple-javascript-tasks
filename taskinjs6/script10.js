/*
Write this function to make it work
 
const person = {
    name: 'foo',
    age: 20,
    [Symbol.toPrimitive](hint) {
      // your code here ...
    },
  };

  console.log(Number(person) + 10); // 30
  `${person} is ${Number(person) > 18 ? 'adult' : 'child'}`; // 'foo is adult'
 */


const person = {
    name: 'foo',
    age: 20,
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this.age;
      } else if (hint === 'string') {
        return this.name;
      } else {
        return this.name;
      }
    },
  };
  
  console.log(Number(person) + 10);
  console.log(`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`);
  