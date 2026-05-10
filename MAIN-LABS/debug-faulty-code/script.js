/* =========================================
   STEP 1: SYNTAX ERROR EXAMPLE
========================================= */

/*
Faulty code:

function greet(name {
  console.log("Hello " + name);
}

Problem:
Missing closing parenthesis

Fixed version below:
*/

function greet(name) {
  console.log("Hello " + name);
}

greet("John");


/* =========================================
   STEP 2: RUNTIME ERROR EXAMPLE
========================================= */

/*
Faulty code:

console.log(user.name);

Problem:
'user' is undefined

Fixed version below:
*/

const user = {
  name: "Alice"
};

console.log(user.name);


/* =========================================
   STEP 3: LOGICAL ERROR EXAMPLE
========================================= */

/*
Faulty code:

function add(a, b) {
  return a - b;
}

Problem:
Wrong operator used

Fixed version below:
*/

function add(a, b) {
  return a + b;
}

console.log("Sum:", add(5, 3));


/* =========================================
   STEP 4: DEBUGGING USING CONSOLE.LOG
========================================= */

function calculateArea(width, height) {

  console.log("Width:", width);
  console.log("Height:", height);

  const area = width * height;

  console.log("Area:", area);

  return area;
}

calculateArea(5, 10);


/* =========================================
   STEP 5: FINAL TESTING
========================================= */

console.log("All debugging examples executed successfully.");