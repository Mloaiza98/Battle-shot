import React from "react";
import { TodoContext} from "../TodoContext";

function CreateCharacter() {
  const { addNewCharacter } = React.useContext(TodoContext);
  const [pic, setPic] = React.useState(0);
  const [name, setName] = React.useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangePic = (event) => {
    setPic(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    addNewCharacter(name, pic);
    setName("");
    setPic(0);
  };
  const onCancel=()=>{
    setName("");
    setPic(0);
  }
  return (
    <form onSubmit={onSubmitForm}>
      <label>Escoge a tu personaje</label>
      <textarea
        placeholder="¿Nombre?"
        id="Todo"
        value={name}
        onChange={onChangeName}
      />
      <select
        name="categories"
        id="categories"
        defaultValue={pic}
        onChange={onChangePic}
      >
        <option hidden selected defaultValue={0}>
          Escoge un personajes
        </option>
        <option value={1}> </option>
        <option value={2}>Video Juego</option>
        <option value={3}>Libro</option>
      </select>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { CreateCharacter };
