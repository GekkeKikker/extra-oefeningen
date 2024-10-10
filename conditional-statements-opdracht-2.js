function uitlegBijTypeVanParameter(parameter) {
  let uitleg;
  switch (typeof parameter) {
    case "boolean":
      uitleg = "De mogelijke waarden zijn: true en false";
      break;
    case "number":
      uitleg = "De mogelijke waarden zijn: 1, 69, 3.141592";
      break;
    case "string":
      uitleg = "De mogelijke waarden zijn: 'a', 'Maarten', '3'";
      break;
    case "object":
      uitleg = "De mogelijke waarden zijn: [1, 2], {naam: 'Maarten'}, null";
    case "undefined":
      uitleg = "De mogelijke waarde is: undefined";
      break;
    case "function":
      uitleg = "De waarde is een functie, bv function hihi(){}";
      break;
    default:
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
