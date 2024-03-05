import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { TodoContext } from "../TodoContext";
import { Button } from "@mui/material";

function GamePage() {
  const { character, punishment } = React.useContext(TodoContext);

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
    <>
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
        }}
        variant="contained"
        onClick={handleSpinClick}
      >
        SPIN
      </Button>
      {winner && <p>{data[prizeNumber].option}    {newPunish}</p>}
    </>
  );
}
export { GamePage };
