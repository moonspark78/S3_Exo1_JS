let age = prompt("Quel est votre âge ?");
if (age < 18) {
    console.log("Vous êtes mineur.");
}
else if (age >=  18 && age < 21) {
    console.log("Hey ! Vous êtes majeur !");
}
else if (age >= 21 ) {
    console.log("Hey ! Vous êtes majeur !");
    console.log("Vous avez la majorité internationale.");
}