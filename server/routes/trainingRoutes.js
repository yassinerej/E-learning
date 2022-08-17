const router = require("express").Router();
const trainingController = require("../controllers/trainingController");

// Ajouter Formation (Nom, Catégorie, Langues)
router.post("/ajouter-formation", trainingController.add_training);

// Modifier Formation (Nom, Catégorie)
router.put("/formation/:id", trainingController.update_training);

// Supprimer Formation
router.delete("/formation/:id", trainingController.delete_training);

// Détails d'une Formation (Si pas de formation: null)
router.get("/formation/:id", trainingController.get_training);

// Afficher Tout les Formations (Si pas de formation: null)
router.get("/formation-tout", trainingController.get_all_training);

// Recherche d'une Formation par nom
router.get("/formation-recherche", trainingController.find_training);

// Recherche d'une Fromation par catégorie
router.get("/formation-par-categorie", trainingController.get_training_by_category);

module.exports = router;
