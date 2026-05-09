// =====================================
// Step 1: Understanding Synchronous Execution
// =====================================

console.log("STEP 1");

console.log("A");
console.log("B");
console.log("C");


// =====================================
// Step 2: Introduction to setTimeout (Macrotask)
// =====================================

console.log("\nSTEP 2");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


// =====================================
// Step 3: Introduction to Promises (Microtask)
// =====================================

console.log("\nSTEP 3");

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


// =====================================
// Step 4: Microtask vs Macrotask Comparison
// =====================================

console.log("\nSTEP 4");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


// =====================================
// Step 5: Async/Await Flow
// =====================================

console.log("\nSTEP 5");

async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");
}

console.log("3");

test();

console.log("4");


// =====================================
// Step 6: Advanced Flow Challenge
// =====================================

console.log("\nSTEP 6");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");