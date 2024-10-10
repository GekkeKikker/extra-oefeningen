function doortellen(getal) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer!");
  } else {
    for (let i = getal + 1; i <= 100; i++) {
      console.log(i);
    }
  }
}

doortellen(95);
