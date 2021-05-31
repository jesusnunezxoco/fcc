import React from "react";
import QuoteBox from "./components/QuoteBox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <QuoteBox />
      </main>
      <footer>
        <p>by <a href="https://www.linkedin.com/in/jesusnunezxoco/">jesusnunezxoco</a> for FreeCodeCamp</p>
      </footer>
    </div>
  );
}

export default App;
