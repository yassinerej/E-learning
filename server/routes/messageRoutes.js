const router = require("express").Router();
const messagesController = require("../controllers/messagesController");

router.get("/message", messagesController.get_msg);
router.post("/message", messagesController.add_msg);
router.post("/userinfo", messagesController.get_info);

module.exports = router;
