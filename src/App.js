import React from "react";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Portfolio</h1>
      </header>

      <main>
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
