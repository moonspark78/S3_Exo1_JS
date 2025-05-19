let personne1 = prompt("Veuillez entrer un premier prénom :")
let personne2 = prompt("Veuillez entrer un deuxième prénom :")


console.log(personne1 + ":" + " Bonjour !");
console.log(personne2 + ":" + " Bonjour " + personne1 + " Comment ça va ?");

let reponse = prompt(personne2 + ":" + " Comment ça va ?");
console.log(personne1 + ":" + reponse +  " Et toi ?");

let reponse2 = prompt(personne2 + ":" + " Veuillez entrer un second état du jour");
console.log(`${personne2} : ${reponse2} , je te remercie.`);

let heure1 = prompt(personne1 + ":" + " Quelle heure est-il ?");
console.log(`${personne1} :  Quelle heure est-il ?`);

console.log(`${personne2} : Il est ${heure1} heure.`);

console.log(`${personne1} : D’acc, merci.`);

console.log(`${personne2} : Où manges-tu aujourd’hui ? `);

let  jour = prompt("Veuillez entrer un jour ?")

console.log(`${personne1} : Je rentre chez moi comme tous les ${jour}s.`);
console.log(`D'acc`);








