let personne1 = prompt("Veuillez entrer un premier prénom :")
if (personne1 != null) {
  document.getElementById("demo").innerHTML =
  "Bonjour ";
}
let personne2 = prompt("Veuillez entrer un deuxième prénom :")
if (personne2 != null) {
  document.getElementById("demo").innerHTML +=
  "Bonjour" + personne2 + "Comment ça va ?";
}