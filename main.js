function capitalizeFirstOnly(text) {
  function capitalizeFirstOnly(text) {
    if (!text) return "helloWord";
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
    console, log();
  }

  if (!text) return "helloWord"; //
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}
console.log(capitalizeFirstOnly(helloword));
// task html 1
function dashingNumbers(num) {
  function sortInputNumbers(inputStr) {
    const numbers = inputStr
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num)); //

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
      totalSum: totalSum,
    };
  }
}
function addEvenNumbers(n) {}
const arr = [2, 5, 7, 8, 3];
const resul = sumFromTo(arr, 1, 3);

console.log("1.n", result); // : 5 + 7 + 8 = 20
const arry = [2, 5, 7, 8, 3];
const result = sumFromTo(arry, 1, 3);

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
  const number = [4, 5, 8, 10];
  const avg = calculateAverage(number);

  const numbers = [4, 5, 8, 10];
  const avga = calculateAverage(numbers);

  // console.log("6.75:", avga);
}

function calculateHypotenuse(a, b) {
  a, b;
  c = math.sqrt(a ** 2 + b ** 2);
  return c;
}
console.log(calculateHypotenuse(6, 9));

 calculatePower(base, exponent) {
 function digitalRoot(number) {
  while (number >= 10) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    number = sum;
  }
  return number;
}

// 
console.log((16));   //: 7
   
}
function isArraySorted(arr) {
  function checkAndSortArray(arr) {
  // 
  const isSorted = arr.every((value, index) => {
    return index === 0 || value >= arr[index - 1];
  });

  // 
  if (!isSorted) {
    arr.sort((a, b) => a - b);
  }

  return { isSorted, sortedArray: arr };
}

// 
const arr = [40, 10, 30, 20];

const result = checkAndSortArray(arr);

console.log (10.20);
console.log("10 :20", result.sortedArray);
  
}
function isArraySorted(arr) {
  function checkAndSortArray(arr) {
  // 
  const isSorted = arr.every((value, index) => {
    return index === 0 || value >= arr[index - 1];
  });

  // 
  if (!isSorted) {
    arr.sort((a, b) => a - b);
  }

  return { isSorted, sortedArray: arr };
}

// 
const arr = [40, 10, 30, 20];

const result = checkAndSortArray(arr);

console.log (10.20);
console.log("10 :20", result.sortedArray);
  
}function isArraySorted(arr) {
  function checkAndSortArray(arr) {
  // 
  const isSorted = arr.every((value, index) => {
    return index === 0 || value >= arr[index - 1];
  });

  // 
  if (!isSorted) {
    arr.sort((a, b) => a - b);
  }

  return { isSorted, sortedArray: arr };
}

// 
const arr = [40, 10, 30, 20];

const result = checkAndSortArray(arr);

console.log (10.20);
console.log("10 :20", result.sortedArray);
  
}
function isArraySorted(arr) {
  function checkAndSortArray(arr) {
  // 
  const isSorted = arr.every((value, index) => {
    return index === 0 || value >= arr[index - 1];
  });

  // 
  if (!isSorted) {
    arr.sort((a, b) => a - b);
  }

  return { isSorted, sortedArray: arr };
  }
  

const arr = [40, 10, 30, 20];

const result = checkAndSortArray(arr);

// console.log (10.20);
// console.log("10 :20", result.sortedArray);
  
}

function isArraySorted(arr) {
  function checkAndSortArray(arr) {
  // 
  const isSorted = arr.every((value, index) => {
    return index === 0 || value >= arr[index - 1];
  });

  // 
  if (!isSorted) {
    arr.sort((a, b) => a - b);
  }

  return { isSorted, sortedArray: arr };
}

// 
const arr = [40, 10, 30, 20];

const result = checkAndSortArray(arr);

console.log (10.20);
console.log("10 :20", result.sortedArray);
  
}
function checkSpaceInString(str) {
  function (str ) {
    return //.test(str);
}

console.log(("hello\tworld"));  // true
console.log(("helloworld"));    // false
  
}
