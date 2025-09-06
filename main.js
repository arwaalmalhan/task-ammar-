function capitalizeFirstOnly(text) {function capitalizeFirstOnly(text) {
    if (!text) return "helloWord"; 
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
    console,log()
}

    if (!text) return "helloWord"; // 
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}
console.log(capitalizeFirstOnly(helloword));# task-html-1
task html 1
function dashingNumbers(num) {
 function sortInputNumbers(inputStr) {
  const numbers = inputStr
    .split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num)); // 

  return numbers.sort((a, b) => a - b);
}

const userInput = "10, 3, 7, 2, 1";
const sorted = sortInputNumbers(userInput);

console.log(sorted); // [1, 2, 3, 7, 10]
   

}
function addListEnds(arr) {
    function processThreeNumbers(a, b, c) {
  const sumSecondAndThird = b + c;
  const totalSum = a + b + c;

  console.log("10+20", sumSecondAndThird);
  console.log("30", totalSum);

  //
  return {
    sumSecondAndThird: sumSecondAndThird,
    totalSum: totalSum
  };
}

}
function addEvenNumbers(n) {
    
}const arr = [2, 5, 7, 8, 3];
const result = sumFromTo(arr, 1, 3);

console.log("1.n", result); // : 5 + 7 + 8 = 20
const arr = [2, 5, 7, 8, 3];
const result = sumFromTo(arr, 1, 3);

function calculateFactorial(num) {
function factorialLessThanN(n) {
  if (n <= 1) return 1;

  let result = 1;
  for (let i = 1; i < n; i++) {
    result *= i;
  }

  return result;
}
consol.log(i++);    
}

function calculateAverage(arr) {
const numbers = [4, 5, 8, 10];
const avg = calculateAverage(numbers);


const numbers = [4, 5, 8, 10];
const avg = calculateAverage(numbers);

console.log("6.75:", avg); 
    
}

