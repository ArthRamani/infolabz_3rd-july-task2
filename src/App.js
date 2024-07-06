// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [spacecraft, setSpacecraft] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    fetch("https://isro.vercel.app/api/spacecrafts")
      .then((response) => response.json())
      .then((data) => {
        const found = data.spacecrafts.some(
          (item) => item.name.toLowerCase() === spacecraft.toLowerCase()
        );
        setResult(found ? "Spacecraft found" : "Spacecraft not found");
      });
  };

  return (
    <div className="App">
      <h1>Spacecraft Search</h1>
      <input
        type="text"
        value={spacecraft}
        onChange={(e) => setSpacecraft(e.target.value)}
        placeholder="Enter spacecraft name"
      />
      <button onClick={handleSearch}>Search</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
