import { CreateCharacter } from "../CreateCharacter";
import Button from "@mui/material/Button";
import { CharacterItem } from "../CharacterItem";
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
import { TodoContext } from "../TodoContext";
import "./create-section.css";
import React from "react";

const CreateSection = () => {
  const { character, setOpenGame } = React.useContext(TodoContext);
  // const [character, setCharacter] = React.useState([]);
  // setCharacter(defaultCharacter);
  const onClickStart = () => {
    setOpenGame(true);
  };
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={6}>
        <CreateCharacter />
      </Grid>
      <Grid xs={6} md={6}>
        {<h3>Personajes creados</h3>}
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#fbf5a5" }}>
          {character.map((todo) => (
            <CharacterItem key={todo.name} name={todo.name} img={todo.pic} />
          ))}
        </List>
      </Grid>
      <Grid
        xs={12}
        md={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          onClick={onClickStart}
          style={{
            backgroundColor: "#664716",
          }}
          variant="contained"
        >
          Start gamee
        </Button>
      </Grid>
    </Grid>
  );
};

export { CreateSection };
