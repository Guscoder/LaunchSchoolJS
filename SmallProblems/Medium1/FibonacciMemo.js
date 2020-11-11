let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

/* The main difference of this solution is the addition of the memo object. In the outer else clause, the solution uses the memo object to look up whether a previous computation has already been done for the nth value. If it has, the function immediately returns that value; otherwise, the function computes the nth value, stores the result in the memo object, and returns it. */
