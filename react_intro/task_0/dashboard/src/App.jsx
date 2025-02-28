import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <Footer />
    </>
  );
}

export default App;