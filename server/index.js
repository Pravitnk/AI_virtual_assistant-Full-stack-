import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/db.js";

const app = express();
dotenv.config();
connectToDb();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello i am AI virtual assistant");
});

app.listen(PORT, () => {
  console.log("server runing on port", PORT);
});
