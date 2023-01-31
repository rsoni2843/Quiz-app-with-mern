const express = require("express");
const QuizController = require("../controller/quiz.controller");

const router = express.Router();
router.get("/getQuiz", QuizController.getQuiz);
router.get("/", (req, res) => res.send("Quiz route working"));

module.exports = router;
