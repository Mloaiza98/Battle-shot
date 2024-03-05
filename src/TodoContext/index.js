import React, { useState } from "react";
// import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({ children }) {
  //   const {
  //     item: todo,
  //     saveTodos,
  //     error,
  //     loading,
  //   } = useLocalStorage("TODOS_V1", []);
  const [character, setCharacter] = useState([]);
  const punishment = [
    "Bebe 2 segundos",
    "Al jugador que escojas bebe por ti",
    "Shot! Shot! Shot!",
    "Todos Beben!",
    "Bebes 5 segundos",
    "Todos beben menos tu",
  ];

  const addNewCharacter = (name, pic) => {
    let newCharacter = [...character];
    console.log(newCharacter);
    newCharacter.push({ name, pic });
    setCharacter(newCharacter);
  };
  const deleteCharacter = (name, pic) => {
    let newCharacter = [...character];
    const indexItem = newCharacter.findIndex((item) => item.name === name);
    newCharacter.splice(indexItem, 1);
    setCharacter(newCharacter);
  };
  const [openCharacter, setOpenCharacter] = useState(false);
  const [openGame, setOpenGame] = useState(false);
  const [pic, setPic] = React.useState(0);

  return (
    <TodoContext.Provider
      value={{
        character,
        addNewCharacter,
        deleteCharacter,
        openCharacter,
        setOpenCharacter,
        openGame,
        setOpenGame,
        setPic,
        pic,
        punishment
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
