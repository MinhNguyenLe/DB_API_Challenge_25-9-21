require("dotenv").config();

const express = require("express");
const cors = require("cors");

const route = require("../mongodb/routes");

const app = express();

const port = process.env.PORT || 404;

const db = require("../mongodb");
db.connect();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "50mb" }));

route(app);

app.get("/", (req, res) => {
  res.json({ dm: "xin chao" });
});

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
