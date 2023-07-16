//Task in JS3 --- 3rd exercises

let obj = {
	key1: null,
	key2: 0,
	key3: 'string',
};
  
  Object.keys(obj).forEach(key => {
    if (obj[key] === null) {
      delete obj[key];
    }
  });
  
  console.log(obj);