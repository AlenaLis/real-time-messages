const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomController");

const auth = require("../middlewares/auth");

router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
router.post("/", auth, catchErrors(chatroomController.createChatroom));
router.get("/:id", auth, catchErrors(chatroomController.getChatroom));
router.delete("/:id", auth, catchErrors(chatroomController.deleteChatroom));


module.exports = router;
