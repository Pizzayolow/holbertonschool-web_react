import React from "react";
import logo from "./assets/holberton_logo.jpg"; // Vérifie bien le chemin
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {new Date().getFullYear()} - Holberton School</p>
      </div>
    </>
  );
}

export default App;