function checkSpam(str) {
  let strLoweCase = str.toLowerCase();

  return (strLoweCase.includes('1xBet'.toLowerCase() || strLoweCase.includes('xxx')));
}
