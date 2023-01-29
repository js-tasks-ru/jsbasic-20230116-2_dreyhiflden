function sumSalary(salaries) {
  let sum = 0;

  if (Object.keys(salaries).length === 0) {
    return sum;
  }

  return Object.values(salaries).reduce(
    (acc, item) => {
      if (Number.isFinite(item)) {
        return sum = acc + item;
      }

      return sum;
    },
    sum
  );
}
