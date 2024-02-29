import { CreateSection } from "../CreateSection";
import { Modal } from "../Modal";
import ImagenSelector from "../ImagenSelector";
import { TodoProvider, TodoContext } from "../TodoContext";
import React from "react";
import "./App.css";
function App() {
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({ openCharacter }) => (
          <>
            <div className="App">
              <header>
                <h1>BIENVENIDOS A BATTLE SHOT</h1>
              </header>
              <CreateSection />
            </div>
            {openCharacter && (
              <Modal>
                <ImagenSelector />
              </Modal>
            )}
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}

export default App;
