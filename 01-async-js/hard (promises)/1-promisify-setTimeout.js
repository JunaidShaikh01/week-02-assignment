/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

console.log("Start");
wait(2000)
  .then(() => {
    console.log("After 2 Seconds");
    return wait(3000);
  })
  .then(() => {
    console.log("After 5 second");
    return wait(2000);
  })
  .then(() => {
    console.log("After 7 second ");
    return wait(3000);
  })
  .then(() => {
    console.log("After 10 second");
    console.log("End");
  });
