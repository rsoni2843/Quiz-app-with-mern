require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./src/config/connectDb");
const quizRoutes = require("./src/routes/routes");

const app = express();
const db_url = process.env.DB_URL;
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/", quizRoutes);

connectDb(db_url);
app.listen(PORT, () => {
  console.log("Connected to localhost", PORT);
});
