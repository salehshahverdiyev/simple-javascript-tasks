//What will we see in console?

setTimeout(() => console.log('timeout 1'));

Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

Promise.resolve().then(() => console.log('promise 1'));

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 3'));

/* 
promise 1
promise 2
timeout 1
timeout 3
timeout 2
*/