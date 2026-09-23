const express = require("express");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/chat", async (req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      input: req.body.message,
      tools: [
        {
          type: "web_search"
        }
      ]
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "माफ़ कीजिए, अभी server में समस्या आ रही है।"
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Amarjeet GPT running on port ${PORT}`);
});