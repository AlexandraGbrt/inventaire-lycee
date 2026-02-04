export interface PCFixe {
    niveau: number;
    salle: string;
    nomPC: string;
    quantite: number;
    annee: number;
    se: string;
    ssd: number;
    aCortex: boolean;
    imprimanteAttachee?: string;
    divers?: string;
}

export const inventaireGlobal: PCFixe[] = [
    // --- NIVEAU -1 ---
    { niveau: -1, salle: "atelier", nomPC: "LENOVO M73", quantite: 2, annee: 2015, se: "W7", ssd: 0, aCortex: false },

    // --- NIVEAU 0 ---
    { niveau: 0, salle: "S001", nomPC: "Lenovo neo 50", quantite: 12, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "S002", nomPC: "LENOVO M720S", quantite: 12, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "LABO(SDP)", nomPC: "Lenovo neo 50", quantite: 2, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "S006", nomPC: "Lenovo neo 50", quantite: 12, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "S007", nomPC: "Lenovo neo 50", quantite: 12, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "S010", nomPC: "Lenovo neo 50", quantite: 11, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "S011", nomPC: "Lenovo neo 50", quantite: 1, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 0, salle: "S015", nomPC: "Lenovo neo 50", quantite: 1, annee: 2024, se: "W10", ssd: 0, aCortex: true },

    // --- NIVEAU 1 ---
    { niveau: 1, salle: "CDI", nomPC: "Lenovo neo 50", quantite: 18, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 1, salle: "ARTS", nomPC: "LENOVO M910t", quantite: 7, annee: 2017, se: "W10", ssd: 0, aCortex: true },
    { niveau: 1, salle: "ARTS SDC", nomPC: "Lenovo m75s", quantite: 19, annee: 2023, se: "W10", ssd: 0, aCortex: true },
    { niveau: 1, salle: "SDP", nomPC: "Lenovo neo 50", quantite: 7, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 1, salle: "MUSIQUE", nomPC: "LENOVO M700", quantite: 1, annee: 2017, se: "W10", ssd: 0, aCortex: true },
    { niveau: 1, salle: "LOCAL AGENT", nomPC: "LENOVO TINY", quantite: 1, annee: 2021, se: "W10", ssd: 0, aCortex: true },
    { niveau: 1, salle: "REUNION", nomPC: "LENOVO M700", quantite: 1, annee: 2017, se: "W10", ssd: 0, aCortex: true, divers: "2 CAMERAS" },

    // --- NIVEAU 2 ---
    { niveau: 2, salle: "S201", nomPC: "HP PRO 400", quantite: 1, annee: 2016, se: "W7", ssd: 0, aCortex: false },
    { niveau: 2, salle: "S204", nomPC: "LENOVO M73", quantite: 2, annee: 2015, se: "W10", ssd: 0, aCortex: false },
    { niveau: 2, salle: "S202", nomPC: "HP PRO 400", quantite: 1, annee: 2016, se: "W7", ssd: 0, aCortex: false },
    { niveau: 2, salle: "S205(SDP)", nomPC: "Lenovo neo 50", quantite: 1, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 2, salle: "S206", nomPC: "Lenovo neo 50", quantite: 13, annee: 2024, se: "W7", ssd: 0, aCortex: true },
    { niveau: 2, salle: "S207", nomPC: "Lenovo neo 50", quantite: 12, annee: 2024, se: "W7", ssd: 0, aCortex: true },
    { niveau: 2, salle: "S211", nomPC: "Lenovo neo 50", quantite: 12, annee: 2024, se: "W10", ssd: 0, aCortex: true },

    // --- NIVEAU 3 ---
    { niveau: 3, salle: "S302", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S303", nomPC: "LENOVO M720S / Neo 50", quantite: 2, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S304", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S305", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S306", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S307", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S308", nomPC: "Lenovo neo 50", quantite: 2, annee: 2024, se: "W10", ssd: 0, aCortex: true, divers: "FAX,TELEPHONE" },
    { niveau: 3, salle: "S309", nomPC: "Lenovo neo 50", quantite: 19, annee: 2017, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S310", nomPC: "Lenovo neo 50", quantite: 21, annee: 2018, se: "W10", ssd: 0, aCortex: true, divers: "SCANNER" },
    { niveau: 3, salle: "S311(SDP)", nomPC: "LENOVO M720S", quantite: 4, annee: 2020, se: "W10", ssd: 0, aCortex: true, divers: "SCANNER" },
    { niveau: 3, salle: "S312", nomPC: "LENOVO M720S", quantite: 9, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S313", nomPC: "LENOVO M700", quantite: 27, annee: 2018, se: "W10", ssd: 0, aCortex: true, divers: "SCANNER" },
    { niveau: 3, salle: "S314", nomPC: "Lenovo neo 50", quantite: 25, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "S316", nomPC: "LENOVO M720S", quantite: 20, annee: 2020, se: "W10", ssd: 0, aCortex: true, divers: "SCANNER" },
    { niveau: 3, salle: "S318", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 3, salle: "SDD", nomPC: "LENOVO M72", quantite: 6, annee: 2012, se: "W10", ssd: 0, aCortex: false },

    // --- NIVEAU 4 ---
    { niveau: 4, salle: "S401", nomPC: "LENOVO M700", quantite: 1, annee: 2018, se: "W10", ssd: 0, aCortex: true },
    { niveau: 4, salle: "S402", nomPC: "LENOVO M700", quantite: 1, annee: 2018, se: "W10", ssd: 0, aCortex: true },
    { niveau: 4, salle: "S403", nomPC: "LENOVO M700", quantite: 1, annee: 2018, se: "W10", ssd: 0, aCortex: true },
    { niveau: 4, salle: "S404", nomPC: "LENOVO M700", quantite: 1, annee: 2018, se: "W10", ssd: 0, aCortex: true },
    { niveau: 4, salle: "S405", nomPC: "LENOVO M700", quantite: 1, annee: 2018, se: "W10", ssd: 0, aCortex: true, divers: "TBI" },
    { niveau: 4, salle: "S406", nomPC: "LENOVO M700", quantite: 17, annee: 2018, se: "W10", ssd: 0, aCortex: true },
    { niveau: 4, salle: "S407", nomPC: "LENOVO M700", quantite: 17, annee: 2018, se: "W10", ssd: 0, aCortex: true },
    { niveau: 4, salle: "S408", nomPC: "LENOVO M700", quantite: 1, annee: 2018, se: "W10", ssd: 0, aCortex: true },

    // --- NIVEAU 5 ---
    { niveau: 5, salle: "S518", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S516", nomPC: "Lenovo neo 50", quantite: 1, annee: 2024, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S514", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S513", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S512", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S511", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S510", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S509", nomPC: "LENOVO M710", quantite: 1, annee: 2019, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S508", nomPC: "Lenovo neo 50", quantite: 1, annee: 2025, se: "W10", ssd: 0, aCortex: true, divers: "1 CAMERA" },
    { niveau: 5, salle: "S507", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S506", nomPC: "Lenovo neo 50", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S505", nomPC: "LENOVO M720S", quantite: 1, annee: 2025, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S504", nomPC: "LENOVO M720S", quantite: 2, annee: 2020, se: "W10", ssd: 0, aCortex: true, divers: "SCANNER" },
    { niveau: 5, salle: "S503", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S502", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true },
    { niveau: 5, salle: "S501", nomPC: "LENOVO M720S", quantite: 1, annee: 2020, se: "W10", ssd: 0, aCortex: true }
];


// ---------- IMPRIMANTES ----------- //

export interface Imprimante {
    niveau: number;
    salle: string;
    modele: string;
    type: "NB" | "C"; // NB pour Noir et Blanc, C pour Couleur
    quantite: number;
}

export const inventaireImprimantes: Imprimante[] = [
    // --- NIVEAU 0 ---
    { niveau: 0, salle: "S001", modele: "KYOCERA 2100", type: "NB", quantite: 1 },
    { niveau: 0, salle: "S002", modele: "KYOCERA 2100", type: "NB", quantite: 1 },
    { niveau: 0, salle: "LABO(SDP)", modele: "HP M402", type: "NB", quantite: 1 },
    { niveau: 0, salle: "S006", modele: "HP 4014N", type: "NB", quantite: 1 },
    { niveau: 0, salle: "S007", modele: "KYOCERA 2100", type: "NB", quantite: 1 },
    { niveau: 0, salle: "S010", modele: "HP 4014N", type: "NB", quantite: 1 },

    // --- NIVEAU 1 ---
    { niveau: 1, salle: "CDI", modele: "HP 3005", type: "NB", quantite: 1 },
    { niveau: 1, salle: "CDI", modele: "HP COLOR 400", type: "C", quantite: 1 },
    { niveau: 1, salle: "ARTS", modele: "Epson XP 960", type: "C", quantite: 1 },
    { niveau: 1, salle: "ARTS SDC", modele: "HP M452", type: "C", quantite: 1 },
    { niveau: 1, salle: "SDP", modele: "HP M402", type: "NB", quantite: 1 },
    { niveau: 1, salle: "LOCAL AGENT", modele: "HP M402", type: "NB", quantite: 1 },

    // --- NIVEAU 2 ---
    { niveau: 2, salle: "S205(SDP)", modele: "HP M452", type: "C", quantite: 1 },
    { niveau: 2, salle: "S206", modele: "HP 4014 DN", type: "NB", quantite: 1 },
    { niveau: 2, salle: "S207", modele: "KYOCERA 2100", type: "NB", quantite: 1 },
    { niveau: 2, salle: "S211", modele: "HP M402", type: "NB", quantite: 1 },

    // --- NIVEAU 3 ---
    { niveau: 3, salle: "S309", modele: "HP 3005", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S310", modele: "HP M452 (C)", type: "C", quantite: 1 },
    { niveau: 3, salle: "S310", modele: "HP M506 (NB)", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S311(SDP)", modele: "COPIEUR TOSHIBA", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S311(SDP)", modele: "LEXMARK C543", type: "C", quantite: 1 },
    { niveau: 3, salle: "S312", modele: "HP M452 (C)", type: "C", quantite: 1 },
    { niveau: 3, salle: "S312", modele: "HP M506 (NB)", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S313", modele: "HP M506", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S314", modele: "Inconnue", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S316", modele: "HP M402", type: "NB", quantite: 1 },
    { niveau: 3, salle: "S318", modele: "HP M402", type: "NB", quantite: 1 },
    { niveau: 3, salle: "SDD", modele: "HP M402", type: "NB", quantite: 1 },

    // --- NIVEAU 4 ---
    { niveau: 4, salle: "S406", modele: "HP M402", type: "NB", quantite: 1 },
    { niveau: 4, salle: "S407", modele: "HP 4250", type: "NB", quantite: 1 },

    // --- NIVEAU 5 ---
    { niveau: 5, salle: "S510", modele: "HP M402", type: "NB", quantite: 1 },
    { niveau: 5, salle: "S504", modele: "HP 4014N", type: "NB", quantite: 1 }
];