function factorial(n) {
  let result = 1;

  if (n <= 1) {
    return result;
  }

  for (let i = n; i > 0; i--) {
    result = result * i;
  }

  return result;
}
