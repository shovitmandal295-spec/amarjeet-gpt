const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Amarjeet GPT Server is running!");
});

app.listen(PORT, () => {
  console.log(`Amarjeet GPT running on port ${PORT}`);
});