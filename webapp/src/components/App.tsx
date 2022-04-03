import React from "react";
import "../public/App.css";
import { Keyboard } from "./Keyboard";
import { Results } from "./Results";
import { Screen } from "./Screen";
import { InputProvider } from "../context/useInputContext";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <InputProvider>
          <div className="main-block">
            <Screen />
            <Keyboard />
          </div>
          <div className="main-block">
            <Results />
          </div>
        </InputProvider>
      </div>
    </div>
  );
}

export default App;
