//put your code here
export function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (number) {
  if (number < 0) {
    return false;
  }
  this.age = number; // not sure is this necessary
  if (number >= 25) {
    this.requestNewPhoto();
  }
  return number;
};
// test

// const user1 = new User("Tom", 17);
// console.log(user1);
// console.log(user1.prototype);
// user1.setAge(24);
// console.log(user1);
// user1.setAge(27);
// console.log(user1);
// user1.sayHi();
// user1.requestNewPhoto();
// user1.setAge(-1);
// console.log(user1);
