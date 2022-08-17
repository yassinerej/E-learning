const router = require("express").Router();
const userController = require("../controllers/usersController");

// GET USER PROFILE
router.get("/user", userController.get_profile);

// UPDATE USER PROFILE
router.put("/user", userController.put_profile);

// DELETE USER PROFILE
router.delete("/user", userController.delete_profile);

module.exports = router;
