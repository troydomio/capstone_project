import ImageCard from "./ImageCard"
import { useState, useEffect } from "react";
import NewImage from "./NewImage"

const Main = () => {

    const[images, setImages] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage] = useState("");
    const [addButton, setAddButton]= useState(false);

    useEffect(() => {
        fetch("/images")
          .then((r) => r.json())
          .then(setImages);
      }, []);
    return (
        
        <div className="imagecontainer">
            {images.map((image)=> (
        // console.log(image.image_url)
       <ImageCard image={image} />
    ))}  
            <NewImage />
             
        </div>
    )
}

export default Main
