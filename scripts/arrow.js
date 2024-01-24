this.firstName = 'Grace';
const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 // arrow is not current object itself, but scope of current object
 fullName: () => { return this.firstName + ' ' + this.lastName }
}

let x = person.fullName();
console.log(x);
