const router = require("express").Router();
const conversationController = require("../controllers/conversationController");

router.post("/chat", conversationController.new_conv);
router.get("/chat", conversationController.get_user_conv);
router.post("/convinfo", conversationController. get_conv_info);

module.exports = router;

