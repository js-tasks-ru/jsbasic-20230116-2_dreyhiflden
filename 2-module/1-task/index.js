function sumSalary(salaries) {
  let sum = 0;

  if (Object.keys(salaries).length === 0) {
    return sum;
  }

  return Object.values(salaries).reduce(
    (acc, item) => {
      if (isSafeNumberValue(item)) {
        return sum = acc + item;
      }

      return sum;
    },
    sum
  );
}

function isSafeNumberValue(value) {
  return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
}
