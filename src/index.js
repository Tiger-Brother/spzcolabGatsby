import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hellooooo CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Hello name="Taro" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
