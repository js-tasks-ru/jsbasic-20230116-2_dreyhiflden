function showSalary(users, age) {
  return users
    .filter(({ age: userAge }) => userAge <= age)
    .reduce(
      (acc, { name, balance }, index, arr) => arr.length - 1 === index
        ? acc.concat(`${name}, ${balance}`)
        : acc.concat(`${name}, ${balance}\n`),
      ''
    );
}
