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
export interface Eleve {
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





function trouverLocataire (idRecherche :string) {
    const resultat = listeEleves.find( eleve => eleve.idMaterielEmprunte === idRecherche)
    
    console.log(resultat?.nom)
}

trouverLocataire("PC-R1");

rl.question('Quel ID de PC cherchez-vous ? ', (reponse) => {
  // 1. Appelle ta fonction trouverLocataire en lui passant 'reponse'
  trouverLocataire(reponse)
  // 2. Ferme l'interface avec rl.close()
  rl.close()
});