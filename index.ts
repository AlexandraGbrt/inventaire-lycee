import { inventairePCFixe, inventaireImprimantes, inventairePCPortable } from "./donnees";
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function trouverNombreSalleAvecPC (idRecherche :number) {
    const pcNiveau3 = inventairePCFixe.filter( pc => pc.niveau === 3)
    // console.log("Au niveau 3 il y a "+ pcNiveau3.length + " salles avec PC.")
}
trouverNombreSalleAvecPC(3);

// ----------- PC par etage ------------------- // 
function nombrePC (idRecherche :number) {
    let totalPC = 0;

    // On utilise idRecherche et non un niveau pour être flexible
    const pcNiveau = inventairePCFixe.filter( pc => pc.niveau === idRecherche);

    pcNiveau.forEach(unPC => {
        totalPC += unPC.quantite;
    })

    //console.log("Au niveau " + idRecherche + ", il y a " + totalPC + " PC.")
}

nombrePC(3);



// --------- TOTAL PC PARC ------- Salle W10 + nombre de PC ---------
function totalParcPC (systeme: string) {
    let total = 0;
    let totalW10 = 0;     // Uniquement pour Windows 10
    let sallesW10 : string[] = [];


    inventairePCFixe.forEach(pc => {
     total += pc.quantite;
     if (pc.se === systeme ) {
            totalW10 += pc.quantite;

            // sallesW10.push(pc.salle + " (" + pc.quantite + ")");
            // OU :
            sallesW10.push(`${pc.salle} (${pc.quantite})`);

            }
    })

    sallesW10.sort(); // Tri alphabétique

     console.log("Il a y " + total + " PC dans le parc.");
     console.log("Dont " + totalW10 + " PC sous Windows 10.");
    // console.log("Voici la liste des salles sous Windows10 :", sallesW10 );
}

//totalParcPC("W10");
// OU readline pour communiquer 
rl.question('Quel système voulez-vous analyser (W10, W11) ? ', (reponse) => {

  totalParcPC(reponse);
  
  // On ferme le tunnel 
  rl.close();
});
