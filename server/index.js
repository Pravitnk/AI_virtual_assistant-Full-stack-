import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello i am AI virtual assistant");
});

app.listen(PORT, () => {
  console.log("app runing on port ", PORT);
});
