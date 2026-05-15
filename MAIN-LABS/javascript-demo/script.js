// ===============================
// STEP 2: ARRAYS
// ===============================

// Subtask 2.1: Create Arrays
let fruits = ["apple", "banana", "mango"];
let numbers = [10, 20, 30, 40];
let students = ["Ana", "Ben", "Carlo"];

// Subtask 2.2: Array Methods
console.log("Original fruits:", fruits);

// push - add element at the end
fruits.push("orange");

// pop - remove last element
fruits.pop();

// unshift - add element at the beginning
fruits.unshift("grapes");

// shift - remove first element
fruits.shift();

console.log("Modified fruits:", fruits);
console.log("Number of fruits:", fruits.length);


// ===============================
// STEP 3: OBJECTS
// ===============================

// Subtask 3.1: Create Objects
let student = {
  name: "Juan Dela Cruz",
  age: 20,
  course: "BSIT",
  isEnrolled: true
};

console.log("Student object:", student);

// Subtask 3.2: Access and Modify Properties

// Dot notation
console.log("Name:", student.name);

// Bracket notation
console.log("Age:", student["age"]);

// Modify values
student.age = 21;
student["course"] = "BS Computer Science";

console.log("Updated student:", student);


// ===============================
// STEP 4: BUILT-IN METHODS
// ===============================

// Subtask 4.1: map, filter, forEach

let grades = [75, 82, 90, 68, 95];

// forEach - print all grades
console.log("All grades:");
grades.forEach(grade => {
  console.log(grade);
});

// map - increase each grade by 5
let boostedGrades = grades.map(grade => grade + 5);
console.log("Boosted grades:", boostedGrades);

// filter - get passing grades (>= 75)
let passingGrades = grades.filter(grade => grade >= 75);
console.log("Passing grades:", passingGrades);


// ===============================
// STEP 4.2: OBJECTS INSIDE ARRAYS
// ===============================

let classList = [
  { name: "Ana", score: 85 },
  { name: "Ben", score: 72 },
  { name: "Carlo", score: 90 },
  { name: "Dana", score: 60 }
];

// forEach - display students
console.log("Class List:");
classList.forEach(person => {
  console.log(person.name + " - " + person.score);
});

// filter - passing students
let passedStudents = classList.filter(person => person.score >= 75);
console.log("Passed Students:", passedStudents);

// map - extract only names
let studentNames = classList.map(person => person.name);
console.log("Student Names:", studentNames);


// ===============================
// STEP 5: TESTING & VALIDATION
// ===============================

// You can check outputs in browser console or Node.js
console.log("=== TEST COMPLETE ===");
console.log("Arrays and objects operations successful.");