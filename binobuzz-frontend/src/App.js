import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://binobuzz-production.up.railway.app/trends")
      .then((res) => res.json())
      .then((data) => {
        setTrends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch trends:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="title">🔥 BinoBuzz</h1>
      <p className="subtitle">Live trending searches around Bino</p>
      {loading ? (
        <p className="loading">Loading trends...</p>
      ) : (
        <ul className="trend-list">
          {trends.map((trend, i) => (
            <li key={i}>
              <span className="term">{trend.term}</span>
              <span className="count">{trend.count}</span>
            </li>
          ))}
        </ul>
      )}
      <footer>
        <p>Made with ❤️ using React + Railway</p>
      </footer>
    </div>
  );
}

export default App;
