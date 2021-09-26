const Quiz = require("../models/Quiz");

const QuizCtrl = {
  getQuiz: async (req, res) => {
    try {
      const id = req.params.id;

      const allQuiz = await Quiz.find();

      let quiz = [];
      allQuiz.forEach((item) => {
        if (item.idTeam === id) quiz.push(item);
      });
      console.log(quiz);

      if (quiz.length === 0) res.status(500).json({ msg: "quiz not found" });

      res.status(200).json({ quiz: quiz });
    } catch (error) {
      console.log("error when get new quiz");
      res.status(500).json({ msg: err.message });
    }
  },
  setQuiz: async (req, res) => {
    try {
      const { question, answer, correct, idTeam } = req.body;

      const newQuiz = new Quiz({
        question,
        answer: answer,
        correct,
        idTeam,
      });
      await newQuiz.save();

      res.status(200).json({ newQuiz: newQuiz });
    } catch (error) {
      console.log("error when set new quiz");
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = QuizCtrl;
