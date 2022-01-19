// Class code examples

const student1 = {name: "Bob", age: 17};
const student2 = {name: "Susy", age: 18};
const student3 = {name: "Ted", age: 18};

// Creating an array
const students = [
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
];

console.log(students[1]);

console.log(students[1].age); // You think it's important that Susy is student number 2
console.log(students[students.indexOf("Susy")]) // This will not work because an object is not equal to a string

// Creating an object
const Bob = {name: "Bob", age: 17};
const Susy = {name: "Susy", age: 18};
const Ted = {name: "Ted", age: 18};

const studentsObj = {
    Bob: {name: "Bob", age: 17},
    Susy: {name: "Susy", age: 18},
    Ted: {name: "Ted", age: 18}
}

console.log(studentsObj.Susy.age); //You think that it's important that the student's name is "Susy"
studentsObj.hasOwnProperty("Susy");
studentsObj.hasOwnProperty("Marco");


//Arrays inside objects
const classroom = {
    marco: {name: "Marco", friends: [{name: "Paolo", age: 49}]},
    carlos: {name: "Carlos", friends: [{name: "Gabriel", age:45}]},
    carol: {name: "Carol", friends: [{name: "Bob", age: 17}, {name: "Susy", age: 18}, {name: "Ted", age: 18}]}
}

console.log(classroom.carlos.friends.length);

for (const friend of classroom
    .carol
    .friends) console.log(friend.name);