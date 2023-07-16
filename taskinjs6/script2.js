/*
Write two functions, one for constructing User, other for Employee. Employee instance should be instance of User too


function User() {}
function Employee() {}

const e = new Employee();

console.log('e instanceof Employee', e instanceof Employee); // true
console.log('e instanceof User', e instanceof User); // true
*/


function User(fullname, nickname, password) {
    this.fullname = fullname;
    this.nickname = nickname;
    this.password = password;
  }
  
  function Employee(fullname, nickname, password, employeeID) {
    User.call(this, fullname, nickname, password);
    this.employeeID = employeeID;
  }
  
  Employee.prototype = Object.create(User.prototype);
  Employee.prototype.constructor = Employee;
  
  const user = new User('Saleh Shahverdiyev', 's4l3h_005', '123456789');
  const e = new Employee('Polat Alemdar', 'polat_abi', '987654321', '#001');
   
  console.log('e instanceof Employee:', e instanceof Employee); 
  console.log('e instanceof User:', e instanceof User); 
  
  