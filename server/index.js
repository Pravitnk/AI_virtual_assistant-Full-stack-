import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello i am AI virtual assistant");
});

app.listen(PORT, () => {
  console.log("app runing on port ", PORT);
});
