import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoContext } from "../TodoContext";

export default function CharacterItem({ name, img }) {
  const {  deleteCharacter } = React.useContext(TodoContext);
  const onDelete = () => {
    deleteCharacter(name, img);
  };
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar alt={name} src={`/assets/Imagen/${img}.png`} />
      </ListItemAvatar>
      <ListItemText primary={name} />
      <DeleteIcon onClick={onDelete}/>
    </ListItem>
  );
}

export { CharacterItem };
