function camelize(str) {
  return str
    .split('')
    .map((item, index, arr) => arr[index - 1] === '-'
      ? item.toUpperCase()
      : item
    )
    .join('')
    .replaceAll('-', '');
}
