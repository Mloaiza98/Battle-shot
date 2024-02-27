import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function CharacterItem({ name, img }) {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar alt={name} src={`static/Imagen/${img}.jpeg`} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
}

export { CharacterItem };
