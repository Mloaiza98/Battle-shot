import React from "react";
import "./GameWinner.css"
function GameWinner({ data, punishment }) {
  return (
    <div className="GameWinner"
    >
      <img src={data} alt="Winner" width="30%" height="auto"></img>
      <h3>{punishment}</h3>
    </div>
  );
}
export { GameWinner };
