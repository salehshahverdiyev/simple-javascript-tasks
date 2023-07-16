// Create an object named "person" with properties: name, age, and occupation.
// Add a method to the object that returns the person's full name.

const person = {
  name: "Saleh Shahverdiyev",
  age: 18,
  occupation: "Full/stack Developer",
  getFullName: function() {
    return this.name;
  }
};

console.log(person.getFullName());