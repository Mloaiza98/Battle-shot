function CharacterItem({ name, img }) {
  return (
    <div>
      <img src={require(`../Imagen/${img}.jpeg`).default} alt="Nose que poner" />
      <h2>{name}</h2>
    </div>
  );
}

export { CharacterItem };
