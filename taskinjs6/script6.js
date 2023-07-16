//What will we see in console?

new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    });
  }).then(() => {
    console.log('promise');
  });

  setTimeout(() => {
    console.log('timeout');
  });

  console.log('hello');

  requestIdleCallback(() => {
    console.log('requestIdleCallback');
  });

  /*
  hello
  promise
  timeout
  requestIdleCallback
  */ 