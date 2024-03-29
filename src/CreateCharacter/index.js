import React from "react";
import { TodoContext } from "../TodoContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./CreateCharacter.css";

export default function CreateCharacter() {
  const { addNewCharacter, setOpenCharacter, pic, setPic } =
    React.useContext(TodoContext);
  const [name, setName] = React.useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onImgClick = () => {
    setOpenCharacter(true);
  };

  const onCancel = () => {
    setName("");
  };
  const onAdd = () => {
    addNewCharacter(name, pic);
    setName("");
    setPic(0);
  };
  return (
    <Card sx={{ maxWidth: 345, background: "#DC852A" }}>
      <CardContent className={"Content"}>
        <CardMedia
          sx={{
            height: 140,
            width: 140,
            borderRadius: 50,
            display: "inline-flex",
          }}
          image={`https://mloaiza98.github.io/Battle-shot/assets/Imagen/${pic}.png`}
          title="Character"
          onClick={onImgClick}
        />
      </CardContent>

      <CardContent className={"Content"}>
        <TextField
          sx={{
            color: "#FFC47E",
          }}
          id="Name"
          placeholder="Escribe un nombre"
          value={name}
          autoComplete="false"
          onChange={onChangeName}
        />
      </CardContent>
      <CardActions className={"Content"}>
        <Button
          style={{
            backgroundColor: "#664716",
          }}
          variant="contained"
          onClick={onAdd}
        >
          Agregar
        </Button>
        <Button
          style={{
            color: "#664716",
          }}
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
}

export { CreateCharacter };
