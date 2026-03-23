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



// --------- TOTAL PC PARC ------- Salle W10 + nombre de PC --------- //
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



// --------- PC PORTABLES ------- Nombre PC dispo & liste emprunteur --------- //

function pcPortableDispo () {
    let pcDispo = inventairePCPortable.filter( pc => pc.enPret === false);

    console.log ("Il reste " + pcDispo.length + " PC portables en stock" );
}

pcPortableDispo();


function listeEmprunteurs () {
    let pcEnPret = inventairePCPortable.filter (pc => pc.enPret === true);

    pcEnPret.forEach(unPC => {
        console.log (unPC.emprunteur);
    })
   

}

listeEmprunteurs();



// La "consigne" complète pour tes PC fixes
export interface PCFixe {
    salle: string;
    nomPC: string;
    quantite: number;
    annee: number;
    se: string; // Système d'Exploitation
    imprimanteAttachee?: string; // Le '?' veut dire que c'est optionnel
    ssd: number;
    aCortex: boolean;
    // On ajoute une liste de périphériques divers (ex: caméras)
    divers?: string[];
}

// On crée maintenant un TABLEAU de PC (comme les lignes de ton Excel)
export const inventaireSalleReunion: PCFixe[] = [
    {
        salle: "R1",
        nomPC: "PC-R1",
        quantite: 1,
        annee: 2022,
        se: "Windows 10",
        ssd: 0,
        aCortex: true,
        divers: ["Caméra R1"]
    },
    {
        salle: "R2",
        nomPC: "PC-R2",
        quantite: 15,
        annee: 2024,
        se: "Windows 10",
        ssd: 0,
        aCortex: true,
        divers: ["Caméra R2"]
    }
];


export const suiviPrets = [
    { nom: "Léo", aRenduSonPC: true },
    { nom: "Léa", aRenduSonPC: false },
    { nom: "Lya", aRenduSonPC: true },
    { nom: "Lena", aRenduSonPC: false },
];


// On définit toujours ses "outils" (interfaces) et ses "données" (tableaux) AVANT de s'en servir dans une fonction.
// 1. La règle pour les élèves
/* export interface Eleve {
    nom: string;
    idMaterielEmprunte: string | null;
}

// 2. Les données (le fameux tableau qui manquait !)
export const listeEleves: Eleve[] = [
    { nom: "Léo", idMaterielEmprunte: "PC-R1" },
    { nom: "Léa", idMaterielEmprunte: "PC-R2" },
    { nom: "Yanis", idMaterielEmprunte: null }
];





import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 */



/* console.log("--- Rapport d'Inventaire Complet ---");

inventaireSalleReunion.forEach(pc => {
    const statut = pc.aCortex ? "✅ Sécurisé" : "⚠️ NON SÉCURISÉ";
    console.log(`${pc.nomPC} (${pc.salle}) - ${statut}`);

    if (pc.divers && pc.divers.length > 0) {
        console.log(`   Périphériques : ${pc.divers.join(", ")}`);
    }
}); */




/* suiviPrets.forEach( (eleve) => {
    if (eleve.aRenduSonPC === true) {
        console.log ("Merci " + eleve.nom);
    } else {
        console.log (eleve.nom + " Veuillez rapporter le PC")
    }
}); */


// On crée une nouvelle liste qui ne contient QUE les retardataires
/* const listeRetardataires = suiviPrets.filter((eleve) => {
    return eleve.aRenduSonPC === false;
});

console.log("--- LISTE (À CONTACTER) ---");
console.log(listeRetardataires);

 */





/* function trouverLocataire (idRecherche :string) {
    const resultat = listeEleves.find( eleve => eleve.idMaterielEmprunte === idRecherche)
    
    console.log(resultat?.nom)
}

trouverLocataire("PC-R1");

rl.question('Quel ID de PC cherchez-vous ? ', (reponse) => {
  // 1. Appelle ta fonction trouverLocataire en lui passant 'reponse'
  trouverLocataire(reponse)
  // 2. Ferme l'interface avec rl.close()
  rl.close()
}); */





