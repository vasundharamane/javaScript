// object is a collection of properties

let person = {
    firstName: 'Tim',
    lastname: 'Joe',
    age: 24
}

//retreive particular property
console.log(person.firstName);
console.log(person['lastname']);

//update particular property
person.firstName = 'Tim Dane';

console.log(person.firstName);

//add new property
person.gender = 'male';

console.log(person);

//check if object exist
console.log('gender' in person);

//delete particular property
delete person.gender;

console.log('gender' in person);


for (let key in person) {
    console.log(key + " : " + person[key]);
}


let person2 = {
    firstName: 'Tim',
    lastName: 'Joe',
    age: 24,
    fullname : function(){
       return this.firstName + " "  + this.lastName;
    }
}

console.log(person2.fullname())
