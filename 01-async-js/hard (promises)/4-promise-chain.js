/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${ms / 1000} second  has done`);
      resolve();
    }, ms);
  });
}

function WaitOneSecond() {
  return delay(1000);
}
function waitTwoSecond() {
  return delay(2000);
}
function WaitThreeSecond() {
  return delay(3000);
}

function calculate() {
  const startTime = Date.now();

  Promise.all([WaitOneSecond(), waitTwoSecond(), WaitThreeSecond()]).then(
    () => {
      const endTime = Date.now();
      const estimatedTime = (endTime - startTime) / 1000;
      console.log(`Estimated time taken to run this code is ${estimatedTime}`);
    }
  );
}

calculate();
