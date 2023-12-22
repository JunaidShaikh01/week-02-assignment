## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

const filePath = 'a.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
if (err) {
console.error(err);
return;
}

console.log("File Contents:", data);

// Simulate an increasingly expensive operation
performExpensiveOperation(1000, () => {
console.log("Expensive operation completed.");
});
});

function performExpensiveOperation(iterations, callback) {
let result = 0;

for (let i = 0; i < iterations; i++) {
for (let j = 0; j < iterations; j++) {
for (let k = 0; k < iterations; k++) {
result += i _ j _ k;
// console.log(result)
}
}
}

callback();
}
