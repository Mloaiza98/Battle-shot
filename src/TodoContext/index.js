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
  

  const addNewCharacter = (name, pic) => {
    let newCharacter = [...character];
    console.log(name, pic);
    newCharacter.push({ name, pic });
    setCharacter(newCharacter);
  };
  const [openCharacter, setOpenCharacter] = useState(false);
  const [pic, setPic] = React.useState(0);

  return (
    <TodoContext.Provider
      value={{
        character,
        addNewCharacter,
        openCharacter,
        setOpenCharacter,
        setPic,
        pic
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
