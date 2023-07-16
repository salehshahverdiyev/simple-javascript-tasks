//What will we see in console?

const obj = {
    name: 'foo',
    log: function () {
      console.log(this.name);
    },
  };

  const log = obj.log;

  log();

/*
foo
 */