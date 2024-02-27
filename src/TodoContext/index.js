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

  return (
    <TodoContext.Provider
      value={{
        character,
        addNewCharacter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
