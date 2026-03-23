import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { inventaireImprimantes, inventairePCFixe, inventairePCPortable } from "./donnees";

const app = express();
app.use(cors());
const port = 3000;

// --- CONFIGURATION SWAGGER ---
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Inventaire Lycée',
            version: '1.0.0',
            description: 'Gestion du parc : PC Fixes, Portables et Imprimantes',
        },
        servers: [{ url: `http://localhost:${port}` }],
        paths: {
            '/api/imprimantes': {
                get: {
                    summary: 'Liste des imprimantes',
                    responses: { 200: { description: 'Succès' } }
                }
            },
            '/api/stats/pc-par-niveau/{niveau}': {
                get: {
                    summary: 'PC par étage',
                    parameters: [{ name: 'niveau', in: 'path', required: true, schema: { type: 'integer' } }],
                    responses: { 200: { description: 'Succès' } }
                }
            },
            '/api/stats/systeme/{os}': {
                get: {
                    summary: 'Analyse du parc par OS (ex: W10, W11)',
                    parameters: [{ name: 'os', in: 'path', required: true, schema: { type: 'string' } }],
                    responses: { 200: { description: 'Succès' } }
                }
            },
            '/api/portables/dispo': {
                get: {
                    summary: 'Nombre de PC portables en stock',
                    responses: { 200: { description: 'Succès' } }
                }
            },
            '/api/portables/emprunteurs': {
                get: {
                    summary: 'Liste des personnes ayant un PC en prêt',
                    responses: { 200: { description: 'Succès' } }
                }
            }
        }
    },
    apis: [], 
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// --- ROUTES API (Liaison avec tes fonctions logiques) ---

// 1. Les Imprimantes
app.get('/api/imprimantes', (req, res) => {
    res.json(inventaireImprimantes);
});

// 2. PC par étage (Anciennement fonction nombrePC)
app.get('/api/stats/pc-par-niveau/:niveau', (req, res) => {
    const niveauRecherche = parseInt(req.params.niveau);
    const pcDuNiveau = inventairePCFixe.filter(pc => pc.niveau === niveauRecherche);
    const total = pcDuNiveau.reduce((sum, pc) => sum + pc.quantite, 0);
    
    res.json({
        niveau: niveauRecherche,
        nombreDeSalles: pcDuNiveau.length,
        totalPC: total,
        details: pcDuNiveau
    });
});

// 3. Analyse Système (Anciennement fonction totalParcPC)
app.get('/api/stats/systeme/:os', (req, res) => {
    const systeme = req.params.os; // ex: "W10"
    const pcConcernes = inventairePCFixe.filter(pc => pc.se === systeme);
    const total = pcConcernes.reduce((sum, pc) => sum + pc.quantite, 0);
    const salles = pcConcernes.map(pc => `${pc.salle} (${pc.quantite})`).sort();

    res.json({
        systeme: systeme,
        totalDansLeParc: inventairePCFixe.reduce((sum, pc) => sum + pc.quantite, 0),
        totalPourCeSysteme: total,
        listeDesSalles: salles
    });
});

// 4. Portables Dispos (Anciennement pcPortableDispo)
app.get('/api/portables/dispo', (req, res) => {
    const pcDispo = inventairePCPortable.filter(pc => !pc.enPret);
    res.json({
        quantiteDispo: pcDispo.length,
        modeles: pcDispo.map(p => p.nom)
    });
});

// 5. Liste des Emprunteurs (Anciennement listeEmprunteurs)
app.get('/api/portables/emprunteurs', (req, res) => {
    const pcEnPret = inventairePCPortable.filter(pc => pc.enPret);
    const liste = pcEnPret.map(pc => ({
        utilisateur: pc.emprunteur,
        materiel: pc.nom
    }));
    res.json(liste);
});

app.listen(port, () => {
    console.log(`🚀 Serveur actif : http://localhost:${port}`);
    console.log(`📖 Documentation (Swagger) : http://localhost:${port}/api-docs`);
});