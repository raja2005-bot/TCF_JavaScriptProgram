function missingNumber(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
console.log(missingNumber([1,2,4,5,6], 6)); // 3
