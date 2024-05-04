// 8-dars masallari



// let arr = [];
// function get(n) {
//   for (i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   console.log(arr);
// }
// get(7);



// let arr = [];
// function arrayBul(c, a, b) {
//   for (i = 1; i <= c; i++) {
//     if (i == 2) {
//       arr.push(a, b);
//     } else if (i > 2) {
//       let sum = arr.reduce((total, son) => total + son, 0);
//       arr.push(sum);
//     }
//   }
//   console.log(arr);
// }
// arrayBul(7, 4, 5);



// let arr = [3, 6, 8, 9, 10];
// function reversedArr(arr) {
//   return arr.reverse();
// }
// console.log(reversedArr(arr));



// let arr = [4, 6, 7, 8, 3, 10];
// let newArr = [];
// let seclet = 0;
// function getOddNums(array) {
//   array.forEach((element) => {
//     if (element % 2 == 1) {
//       seclet++;
//       newArr.push(element);
//     }
//   });
//   console.log(`${newArr}, ${seclet} ta toq son bor`);
// }
// getOddNums(array);



// let arr = [6, 7, 8, 9, 7, 9];
// let newArr = [];
// let nnewArr = [];
// function separateOddEvens(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       nnewArr.unshift(arr[i]);
//     }
//   }
//   return newArr.concat(nnewArr);
// }
// console.log(separateOddEvens(arr));



// let arr = [3, 5, 6, 8, 7, 9, 6, 8, 0, 3];
// let newArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2]);
//   }
//   return newArr;
// }
// console.log(printEvenIndex(arr));



// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[arr.length - 1 - i * 2]);
//   }
//   return newArr;
// }
// console.log(printEvenIndex(arr));



// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2]);
//   }
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2 + 1]);
//   }
//   return newArr;
// }
// console.log(printEvenIndex(arr));



// let arr = [4, 5, 7, 8, 6, 9, 6, 8, 0, 3];
// let newArr = [];
// let nnewArr = [];
// function printEvenIndex(arr) {
//   for (i = 0; i < arr.length / 2; i++) {
//     newArr.push(arr[i * 2 + 1]);
//   }
//   for (i = 0; i < arr.length / 2; i++) {
//     nnewArr.unshift(arr[i * 2]);
//   }
//   return newArr.concat(nnewArr);
// }
// console.log(printEvenIndex(arr));




// function alternateArray(arr) {
//   let result = [];
//   let n = arr.length;

//   for (let i = 0; i < n / 2; i += 2) {
//     result.push(arr[i], arr[i + 1], arr[n - 1 - i], arr[n - 2 - i]);
//   }

//   return result;
// }
// let inputArray = [4, 5, 7, 8, 6, 9];
// let outputArray = alternateArray(inputArray);

// console.log(outputArray);




// let arr = [1, 6, 9, 5, 8, 10, 15];
// let k = 2;
// let l = 5;
// let sum = 0;
// function rangeOutSum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (i >= k && i <= l) {
//       continue;
//     } else {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(rangeOutSum(arr));




// let arr = [10, false, "", "Abdulaziz", null];
// let truthy = [];
// let falsy = [];
// for (let element of arr) {
//   if (Boolean(element) === true) {
//     truthy.push(element);
//   } else {
//     falsy.push(element);
//   }
// }
// console.log("truthy:", truthy);
// console.log("falsy:", falsy);



// let arr = [13, 6, 9, 5, 8, 10, 15, 42, 3, 0, 1];
// let minNum = arr[0];
// function getOddMin(arr) {
//   for (i = 0; i < arr.length; i += 2) {
//     if (minNum > arr[i]) {
//       minNum = arr[i];
//     }
//   }
//   return minNum;
// }
// console.log(getOddMin(arr));




// let arr = [13, 6, 9, 5, 8, 10, 15, 42, 3, 0, 1, 99, 3];
// let maxNum = arr[0];
// function getOddMin(arr) {
//   for (i = 1; i < arr.length - 1; i += 2) {
//     if (maxNum < arr[i]) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }
// console.log(getOddMin(arr));




// function findLastLocalMax(arr) {
//   let n = arr.length;
//   for (let i = n - 1; i >= 1; i--) {
//     if (arr[i] > arr[i - 1]) {
//       return i;
//     }
//   }

//   return 0;
// }
// let arr = [3, 5, 2, 8, 6, 9];
// console.log(findLastLocalMax(arr));

// Qo'sh
lar




// function engYaqinElementTopuvchi(massiv, R) {
//   let engYaqin = massiv[0];

//   for (let i = 1; i < massiv.length; i++) {
//     if (Math.abs(massiv[i] - R) < Math.abs(engYaqin - R)) {
//       engYaqin = massiv[i];
//     }
//   }

//   return engYaqin;
// }
// let massiv = [2, 5, 8, 10, 13];
// let a = 7;
// let engYaqin = engYaqinElementTopuvchi(massiv, a);
// console.log(
//   "Massivning elementlari orasidan",
//   a,
//   "ga eng yaqin son:",
//   engYaqin
// );




// function findMaxSumPair(arr) {
//   let n = arr.length;
//   if (n < 2) {
//     return null;
//   }
//   let maxSum = arr[0] + arr[1];
//   let max1 = 0;
//   let max2 = 1;
//   for (let i = 1; i < n; i++) {
//     if (arr[i] + arr[i - 1] > maxSum) {
//       maxSum = arr[i] + arr[i - 1];
//       max1 = i - 1;
//       max2 = i;
//     }
//   }
//   return [arr[max1], arr[max2]];
// }

// let arr = [3, 5, 18, 2, 8, 6, 9];
// console.log(findMaxSumPair(arr));



// let a;
// let b;
// let arr = [3, 5, 18, 2, 8, 6, 9, 5];
// arr.forEach((element) => {
//   if (arr.indexOf(element) != arr.lastIndexOf(element)) {
//     a = arr.indexOf(element);
//     b = arr.lastIndexOf(element);
//   }
// });
// console.log(a, b);





// let arr = [4, 6, 16, 3, 9, 7, 10, 5];
// let soap = 0;
// let newArr = [];
// arr.forEach((go) => {
//   if (go % 2 == 0) {
//     count++;
//     newArr.push(go);
//   }
// });
// console.log(newArr);
// console.log(`${soap} ta son bor`);
