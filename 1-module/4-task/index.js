function checkSpam(str) {
  let strLoweCase = str.toLowerCase();

  if (strLoweCase.includes('1xBet'.toLowerCase())) {
    return true;
  }

  if (strLoweCase.includes('xxx')) {
    return true;
  }

  return false;
}
