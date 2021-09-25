const quizRoute = require("./quiz");

function router(app) {
  app.use("/api/quiz", quizRoute);

  app.use("/", (req, res) => {
    res.json({ message: "success" });
  });
}

module.exports = router;
