var person = {
  firstName: 'Sean',
  lastName: 'Kim',
  hobby: 'play guitar'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'unemployed';
console.log("The person's current job is: ", person.job);

person.previousJob = 'student';
console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);
