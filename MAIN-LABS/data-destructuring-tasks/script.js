console.log("=== ARRAY DESTRUCTURING ===");

const colors = ["red", "green", "blue", "yellow"];

// basic destructuring
const [first, second] = colors;
console.log(first, second);

// skipping elements
const [c1, , c3] = colors;
console.log(c1, c3);

console.log("=== OBJECT DESTRUCTURING ===");

const student = {
  name: "John",
  age: 20,
  course: "IT"
};

const { name, age, course } = student;
console.log(name, age, course);

console.log("=== ADVANCED DESTRUCTURING ===");

const user = {
  id: 1,
  profile: {
    username: "john123",
    email: "john@example.com"
  }
};

// nested destructuring
const {
  profile: { username, email }
} = user;

console.log(username, email);

// default values + renaming
const { role = "student" } = user;
console.log(role);

const { name: fullName = "No Name" } = user;
console.log(fullName);

console.log("=== FUNCTION DESTRUCTURING ===");

// object destructuring in parameters
function displayStudent({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const student2 = {
  name: "Alice",
  age: 22
};

displayStudent(student2);

// array destructuring in function
function sum([a, b]) {
  return a + b;
}

console.log(sum([10, 20]));