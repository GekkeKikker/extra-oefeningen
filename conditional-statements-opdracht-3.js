function uitlegBijTypeVanParameter(parameter) {
  let uitleg;
  if (typeof parameter == "boolean") {
    uitleg = "De mogelijke waarden zijn: true en false";
  } else if (typeof parameter == "number") {
    uitleg = "De mogelijke waarden zijn: 1, 69, 3.141592";
  } else if (typeof parameter == "string") {
    uitleg = "De mogelijke waarden zijn: 'a', 'Maarten', '3'";
  } else if (typeof parameter == "object") {
    uitleg = "De mogelijke waarden zijn: [1, 2], {naam: 'Maarten'}, null";
  } else if (typeof parameter == "undefined") {
    uitleg = "De mogelijke waarde is: undefined";
  } else if (typeof parameter == "function") {
    uitleg = "De waarde is een functie, bv function hihi(){}";
  } else {
    uitleg = "geen informatie over dit type!";
  }
  console.log(uitleg);
}

let woord = "Mezelf";
let nummer = 56;
let bool = false;
uitlegBijTypeVanParameter(woord);
uitlegBijTypeVanParameter(nummer);
uitlegBijTypeVanParameter(bool);
