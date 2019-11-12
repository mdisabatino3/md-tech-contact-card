import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ContactCard } from "./ContactCard";

function App() {
  return (
    <div className="App">
      <ContactCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
