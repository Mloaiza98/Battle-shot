import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { TodoContext } from "../TodoContext";
import { Button } from "@mui/material";
import "./ImagenSelector.css";

export default function ImagenSelector() {
  const { setOpenCharacter, setPic } = React.useContext(TodoContext);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const onClickImg = (item) => {
    setSelectedImage(item);
    console.log(item);
  };

  const onAddImg = () => {
    if (selectedImage) {
      setPic(selectedImage.title);

      const indexPic = itemData.findIndex(
        (pic) => pic.title === selectedImage.title
      );
      itemData.splice(indexPic, 1);

      setOpenCharacter(false);
    }
  };

  const onCancelImg = () => {
    setOpenCharacter(false);
  };

  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              onClick={() => onClickImg(item)}
              className={selectedImage === item ? "ImgSeleccionada" : ""}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        style={{
          backgroundColor: "#DC852A",
        }}
        variant="contained"
        onClick={onAddImg}
      >
        Agregar
      </Button>
      <Button
        style={{
          color: "#664716",
        }}
        variant="out-line"
        onClick={onCancelImg}
      >
        Cancelar
      </Button>
    </div>
  );
}

const itemData = [
  {
    img: "assets/Imagen/1.png",
    title: "1",
  },
  {
    img: "assets/Imagen/2.png",
    title: "2",
  },
  {
    img: "assets/Imagen/3.png",
    title: "3",
  },
  {
    img: "assets/Imagen/4.png",
    title: "4",
  },
  {
    img: "assets/Imagen/5.png",
    title: "5",
  },
  {
    img: "assets/Imagen/6.png",
    title: "6",
  },
  {
    img: "assets/Imagen/7.png",
    title: "7",
  },
  {
    img: "assets/Imagen/8.png",
    title: "8",
  },
  {
    img: "assets/Imagen/9.png",
    title: "9",
  },
  {
    img: "assets/Imagen/10.png",
    title: "10",
  },
  {
    img: "assets/Imagen/11.png",
    title: "11",
  },
  {
    img: "assets/Imagen/12.png",
    title: "12",
  },
  {
    img: "assets/Imagen/13.png",
    title: "13",
  },
  {
    img: "assets/Imagen/14.png",
    title: "14",
  },
  {
    img: "assets/Imagen/15.png",
    title: "15",
  },
  {
    img: "assets/Imagen/16.png",
    title: "16",
  },
  {
    img: "assets/Imagen/17.png",
    title: "17",
  },
  {
    img: "assets/Imagen/18.png",
    title: "18",
  },
  {
    img: "assets/Imagen/19.png",
    title: "19",
  },
];
