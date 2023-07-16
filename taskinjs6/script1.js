/*
Make a constructor function. Check it with instanceof operator

function User() {}

const user = new User();

console.log('user instanceof User', user instanceof User); // true
*/

function User(fullname,nickname,password) {
  this.fullname = fullname;
  this.nickname = nickname;
  this.password = password;
}
const user = new User('Saleh Shahverdiyev', 's4l3h_005', '123456789');

console.log('user instanceof User', user instanceof User);

