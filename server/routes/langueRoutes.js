const router = require("express").Router();
const langueController = require("../controllers/langueController");

// Add a new language 
router.post("/admin/langue", langueController.add_langue); // Admin

// Delete a language 
router.delete("/admin/langue", langueController.delete_langue); // Admin 

// Get All Languages
router.get("/admin/langues", langueController.get_langues);

module.exports = router;

