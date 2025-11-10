import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const trends = [
  { term: "EV charging stations ⚡", count: 15 },
  { term: "Best restaurants nearby 🍴", count: 13 },
  { term: "Freelance jobs 💼", count: 9 },
  { term: "Tech news 🔥", count: 8 },
  { term: "Bino features 🤖", count: 7 },
];

app.get("/", (req, res) => {
  res.send("Welcome to BinoBuzz API 🚀");
});

app.get("/trends", (req, res) => {
  res.json(trends);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
