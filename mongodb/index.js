require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL;

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect successfully");
  } catch (error) {
    console.log("connect failure", error);
  }
}

module.exports = { connect };
