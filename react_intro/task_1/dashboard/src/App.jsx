import React from "react";
import { getCurrentYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-footer">
        <p>© {getCurrentYear()} {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;