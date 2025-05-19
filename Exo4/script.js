let nombre = prompt("Entrez un nombre entre 0 et 10");
if (nombre >= 0 && nombre <= 10) {
  for (let i = 1; i <= nombre; i++) {
    console.log(`${i} -> ${i * 2}`);
  }
} else {
  console.log("Vous êtes trop gourmand...");
}
