// Find the missing integer
function MissingNum(digit, n) {
    let sum = ((n + 1) * (n + 2)) / 2;
    for (let i = 0; i < n; i++) {
      sum -= digit[i];
    }
    return sum;
  }
  const array = [1, 2, 4, 5, 3, 7, 8];
  const n = array.length;
  console.log(" The missing number in array is ", getMissingNum(array, n)); 