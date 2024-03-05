import React from "react";
import { createPortal } from "react-dom";
import "./Game.css"

function Game({ children }) {
  return createPortal(
    <div className="GameBackground">{children}</div>, 
    document.getElementById("game")
  );
}

export { Game };