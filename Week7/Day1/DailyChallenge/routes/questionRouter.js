const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

router.get("/quiz", questionController.start);
router.post("/quiz", questionController.submit);
router.get("/quiz/score", questionController.getScore);

module.exports = router;