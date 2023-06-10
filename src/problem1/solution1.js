// Objective is to provide 3 unique implementations of the following function.
// Input: n - any integer
// Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n_a = function (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

var sum_to_n_b = function (n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

// Test cases
console.log("Test cases");
console.log("sum_to_n_a(5) : ", sum_to_n_a(5));
console.log("sum_to_n_b(5) : ", sum_to_n_b(5));
console.log("sum_to_n_c(5) : ", sum_to_n_c(5));
