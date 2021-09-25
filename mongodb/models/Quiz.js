const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Quiz = new Schema(
  {
    question: {
      type: String,
      default: "",
    },
    answer: {
      type: [String],
      default: [],
    },
    correct: {
      type: [Number],
      default: [1],
    },
    idTeam: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, collection: "Quiz" }
);

module.exports = mongoose.model("Quiz", Quiz);
