function verificationDate() {
    let date = prompt("Entrez une date au format JJ/MM/AAAA :");
    let tabDate = date.split("/");

    let jour = parseInt(tabDate[0]);
    let mois = parseInt(tabDate[1]);
    
    let aujourHui = new Date();
    let jourActuel = aujourHui.getDate();
    let moisActuel = aujourHui.getMonth() + 1;

    if(jour === jourActuel && mois === moisActuel) {
        console.log("Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !");
    }else {
        console.log("En ce moment, une promotion de 15% sur tous les articles");
        
    }
    
}

verificationDate();