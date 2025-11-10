// binobuzz-frontend/api/trends.js
export default function handler(req, res) {
  const trends = [
    { term: "EV charging stations ⚡", count: 15 },
    { term: "Best restaurants nearby 🍴", count: 13 },
    { term: "Freelance jobs 💼", count: 9 },
    { term: "Tech news 🔥", count: 8 },
    { term: "Bino features 🤖", count: 7 },
  ];
  res.status(200).json(trends);
}
