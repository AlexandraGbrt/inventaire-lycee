import { inventaireGlobal, inventaireImprimantes } from "./donnees";

function trouverNombreSalleAvecPC (idRecherche :number) {
    const pcNiveau3 = inventaireGlobal.filter( pc => pc.niveau === 3)
    // console.log("Au niveau 3 il y a "+ pcNiveau3.length + " salles avec PC.")
}
trouverNombreSalleAvecPC(3);

// ----------- PC par etage ------------------- // 
function nombrePC (idRecherche :number) {
    let totalPC = 0;

    // On utilise idRecherche et non un niveau pour être flexible
    const pcNiveau = inventaireGlobal.filter( pc => pc.niveau === idRecherche);

    pcNiveau.forEach(unPC => {
        totalPC += unPC.quantite;
    })

    //console.log("Au niveau " + idRecherche + ", il y a " + totalPC + " PC.")
}

nombrePC(3);



// --------- TOTAL PC PARC ------- Salle W10 ---------
function totalParcPC () {
    let total = 0;
    let totalW10 = 0;     // Uniquement pour Windows 10
    let sallesW10 : string[] = [];


    inventaireGlobal.forEach(pc => {
     total += pc.quantite;
     if (pc.se === 'W10') {
            totalW10 += pc.quantite;

            // sallesW10.push(pc.salle + " (" + pc.quantite + ")");
            // OU :
            sallesW10.push(`${pc.salle} (${pc.quantite})`);

            }
    })

    // console.log("Il a y " + total + " PC dans le parc.");
    // console.log("Dont " + totalW10 + " PC sous Windows 10.");
    // console.log("Voici la liste des salles sous Windows10 :", sallesW10 );
}

totalParcPC();
