const router = require("express").Router();
const QuizCtrl = require("../controllers/Quiz");

router.get("/get/:id", QuizCtrl.getQuiz);
router.post("/set", QuizCtrl.setQuiz);

module.exports = router;
