import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { TodoContext } from "../TodoContext";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { GameWinner } from "../GameWinner";
import "./GamePage.css";

function GamePage() {
  const { character, punishment, setOpenGame } = React.useContext(TodoContext);

  const data = character.map((data, index) => ({
    option: data.name.toString(),
    image: { uri: `/assets/Imagen/${data.pic}.png` },
  }));
  console.log(data);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState(false);
  const [newPunish, setNewPunish] = useState("");

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    const newPunishmentNumber = Math.floor(Math.random() * punishment.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setWinner(false);
    setNewPunish(punishment[newPunishmentNumber]);
  };

  return (
    <div className="section">
      <div className="game">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          backgroundColors={["#FFE382", "#FFAD84", "#C17110"]}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            setWinner(true);
          }}
        />
        <Button
          style={{
            backgroundColor: "#664716",
            justifyContent: "center",
          }}
          variant="contained"
          onClick={handleSpinClick}
        >
          SPIN
        </Button>
        <IconButton
          style={{
            position: "fixed",
            bottom: "5%",
            right: "5%",
            zIndex: 1,
          }}
          variant="contained"
          onClick={() => {
            setOpenGame(false);
          }}
        >
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </div>
      {winner && (
        <GameWinner data={data[prizeNumber].image.uri} punishment={newPunish} />
      )}
    </div>
  );
}
export { GamePage };
