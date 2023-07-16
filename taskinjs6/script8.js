//What will we see in console?

globalThis.name = 'foo';

function log(name) {
  new Function('\tconsole.log(name);')();
}

log('bar');

/*
foo
 */