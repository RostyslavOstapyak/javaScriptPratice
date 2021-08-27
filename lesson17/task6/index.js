export const user = {
  firstName: "firstNameValue",
  lastName: "lastNameValue",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullNameLine) {
    const nameArray = fullNameLine.split(" ");
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  },
};

console.log(user.getFullName());
user.setFullName("bla1 bla2");
console.log(user.getFullName());
