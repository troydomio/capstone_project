import ImageCard from "./ImageCard";
import { useState, useEffect } from "react";

const Main = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/images")
      .then((r) => r.json())
      .then(data => console.log(data));
  }, []);

  function deleteItem(id) {
    const deleteItem = images.filter((image) => image.id !== id);
    setImages(deleteItem);
  }

  return (
    <>
      {images.map((image) => (
        // console.log(image.image_url)
        <ImageCard image={image} deleteItem={deleteItem} />
      ))}
    </>
  );
};

export default Main;
