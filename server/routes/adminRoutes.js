const router = require("express").Router();
const adminController = require("../controllers/adminController");

//Admin USER'S TABLE
router.get("/admin/tables",adminController.admin_user_table);

//ADMIN DELETE USER
router.post("/admin/tables",adminController.delete_user);

//ADMIN CHART STATS 
router.get("/admin/dashboard",adminController.stats_charts);

//ADMIN DELETE TRAINING
router.post("/admin/Trainingtables",adminController.delete_Formation);

//ADMIN TABLE TRAINING
router.get("/admin/Trainingtables",adminController.admin_formation_table);

//ADMIN DATA GETTING
router.get("/admin/settings",adminController.get_profile_admin); 

//ADMIN DELETE TRAINING
router.post("/admin/settings",adminController.update_admin);
module.exports = router;
