import { CreateCharacter } from "../CreateCharacter";
import { StartButton } from "../StartButton";
import { CharacterItem } from "../CharacterItem";
import Grid from "@mui/material/Unstable_Grid2";
import "./create-section.css";
import React from "react";

const CreateSection = () => {
  let defaultCharacter = [
    { name: "pedro", img: "pedro" },
    { name: "majo", img: "majo" },
  ];
  // const [character, setCharacter] = React.useState([]);
  // setCharacter(defaultCharacter);
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={8}>
        <CreateCharacter />
      </Grid>
      <Grid xs={6} md={4}>
        {<h3>Personajes creados</h3>}
      </Grid>
      <Grid xs={6} md={4}>
        {defaultCharacter.map((todo) => (
          <CharacterItem key={todo.name} name={todo.name} img={todo.img} />
        ))}
      </Grid>
      <Grid xs={6} md={4}></Grid>

      <StartButton />
    </Grid>
  );
};

export { CreateSection };
