function getMinMax(str) {
  const arrOfNumbers = str
    .split(' ')
    .filter((item) => isFinite(item));

  return {
    max: Math.max.apply(null, arrOfNumbers),
    min: Math.min.apply(null, arrOfNumbers),
  };
}
