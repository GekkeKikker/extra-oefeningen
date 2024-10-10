function kleineLetters(tekst) {
  if (tekst.toLowerCase() == tekst) {
    return true;
  } else {
    return false;
  }
}

let resultaat = kleineLetters("Bart");
console.log(resultaat);
resultaat = kleineLetters("maarten");
console.log(resultaat);
