function doortellen(getal, printOneven) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer!");
  } else {
    if (printOneven == true) {
      for (let i = getal + 1; i <= 100; i++) {
        if (i % 2 != 0) {
          console.log(i);
        }
      }
    } else {
      for (let i = getal + 1; i <= 100; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      }
    }
  }
}

doortellen(89, false);
