## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

cript>
let counter = 0
setTimeout(() => {
counter++
console.log("counter 1", counter);
setTimeout(() => {
counter++
console.log("counter 2", counter);
setTimeout(() => {
counter++
console.log("counter 3", counter);
}, 3000);
}, 2000);
}, 1000);

(Hint: setTimeout)
