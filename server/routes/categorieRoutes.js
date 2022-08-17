const router = require("express").Router();
const categoryController = require("../controllers/categorieController");

// Add a new category 
router.post("/categories", categoryController.add_category); // Admin

// Delete a category 
router.delete("/categories", categoryController.delete_category); // Admin 

// Get All Categories
router.get("/categories", categoryController.get_categories);

module.exports = router;

