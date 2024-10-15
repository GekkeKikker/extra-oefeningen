function berekenTotaal(aantalLussen) {
  let totaal = 0;

  let i = 0;
  while (i < aantalLussen) {
    totaal += i; // Zelfde als: totaal = totaal + i;
    i++;
  }
  return totaal;
}

console.log("Het totaal is: ", berekenTotaal(10));
console.log("Het totaal is: ", berekenTotaal(25));
console.log("Het totaal is: ", berekenTotaal(100));
console.log("Het totaal is: ", berekenTotaal(666));
console.log("Het totaal is: ", berekenTotaal(10000));
