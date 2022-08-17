const router = require("express").Router();
const authController = require("../controllers/authController");

// REGISTER NEW USER
router.post("/signup", authController.signup_user);

// LOGIN USER
router.post("/login", authController.login_user);

// LOGIN ADMIN
router.post("/login", authController.login_admin);

// LOGOUT USER
router.post("/logout", authController.logout_user);

module.exports = router;
