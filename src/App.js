import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";

function App() {
  return (
    <div>
      <StateLessComponent />
      <StateFull />
    </div>
  );
}

export default App;
