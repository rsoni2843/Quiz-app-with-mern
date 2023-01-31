const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: { type: String, require: true, trim: true },
  type: { type: String, require: true, trim: true },
  difficulty: { type: String, enum: ["easy", "medium", "hard"] },
  question: { type: String, require: true, trim: true },
  correct_answer: { type: String, require: true, trim: true },
  incorrect_answers: { type: Array },
});

const QuizModel = mongoose.model("question", quizSchema);

module.exports = QuizModel;
