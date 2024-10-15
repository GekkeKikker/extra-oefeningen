function berekenTotaal(aantalLussen) {
  let totaal = 0;

  let i = 0;
  while (i < aantalLussen) {
    totaal += i; // Zelfde als: totaal = totaal + i;
    i++;
  }
  return totaal;
}

function printTotaal(aantalLussen) {
  console.log("Het totaal is: ", berekenTotaal(aantalLussen));
}

printTotaal(10);
printTotaal(25);
printTotaal(100);
printTotaal(666);
printTotaal(10000);
