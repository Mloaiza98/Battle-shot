import { CreateSection } from "../CreateSection";
import { Modal } from "../Modal";
import { Game } from "../Game";
import { GamePage } from "../GamePage";
import ImagenSelector from "../ImagenSelector";
import { TodoProvider, TodoContext } from "../TodoContext";
import React from "react";
import "./App.css";
function App() {
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({ openCharacter, openGame }) => (
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
            {openGame && (
              <Game>
                <GamePage />
              </Game>
            )}
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}

export default App;
