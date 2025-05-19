let nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let i = 1; i <= nombre; i++) {
    console.log(" ".repeat(nombre - i) + "#".repeat(i));
}