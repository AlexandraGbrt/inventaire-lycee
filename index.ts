// La "consigne" complète pour tes PC fixes
interface PCFixe {
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
const inventaireSalleReunion: PCFixe[] = [
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



/* console.log("--- Rapport d'Inventaire Complet ---");

inventaireSalleReunion.forEach(pc => {
    const statut = pc.aCortex ? "✅ Sécurisé" : "⚠️ NON SÉCURISÉ";
    console.log(`${pc.nomPC} (${pc.salle}) - ${statut}`);

    if (pc.divers && pc.divers.length > 0) {
        console.log(`   Périphériques : ${pc.divers.join(", ")}`);
    }
}); */


const suiviPrets = [
    { nom: "Léo", aRenduSonPC: true },
    { nom: "Léa", aRenduSonPC: false },
    { nom: "Lya", aRenduSonPC: true },
    { nom: "Lena", aRenduSonPC: false },
];

/* suiviPrets.forEach( (eleve) => {
    if (eleve.aRenduSonPC === true) {
        console.log ("Merci " + eleve.nom);
    } else {
        console.log (eleve.nom + " Veuillez rapporter le PC")
    }
}); */


// On crée une nouvelle liste qui ne contient QUE les retardataires
const listeRetardataires = suiviPrets.filter((eleve) => {
    return eleve.aRenduSonPC === false;
});

console.log("--- LISTE (À CONTACTER) ---");
console.log(listeRetardataires);