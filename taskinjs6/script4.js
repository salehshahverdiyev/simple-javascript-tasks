/*
Use generator function to generate 'count' numbers from 'start'

function* rangeGenerator(start, count, step) {}

function range(start, count, step) {}

range(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(2020, 3); // [2020, 2021, 2022]
*/


function* rangeGenerator(start, count, step = 1) {
    let current = start;
    for (let i = 0; i < count; i++) {
      yield current;
      current += step;
    }
  }
  
  function range(start = 0, count = 10, step = 1) {
    return [...rangeGenerator(start, count, step)];
  }
  
  console.log(range()); 
  console.log(range(1)); 
  console.log(range(2020, 3)); 