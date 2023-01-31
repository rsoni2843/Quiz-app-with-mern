const express = require("express");
const QuizModel = require("../model/quiz.model");

class QuizController {
  static getQuiz = async (req, res) => {
    const query = req.query;
    const { limit } = req.query;
    const questions = await QuizModel.find(query).limit(limit);
    res.send(questions);
  };
}
module.exports = QuizController;
