import { CreateSection } from "../CreateSection";
import "./App.css";
import { TodoProvider } from "../TodoContext";
import React from "react";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header>
          <h1>BIENVENIDOS A BATTLE SHOT</h1>
        </header>
        <CreateSection />
      </div>
    </TodoProvider>
  );
}

export default App;
