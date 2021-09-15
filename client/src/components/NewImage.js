import { useState } from "react";

function NewImage({ user }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([])

    function onAddImage(newImage) {
        const updatedImageArray = [newImage, ...images];
        setImages(updatedImageArray);
      }

    const handleSubmit= (e) => {
        e.preventDefault();
        fetch("/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
               description: description,
               image_url: imageUrl
            }),
            })
            .then(response => response.json())
            .then(data => onAddImage(data)); }

      return (

<form onSubmit={handleSubmit}>

<input 
//should prob have a className
type="text" 
placeholder="title" 
value={title}  
onChange={(e) => setTitle(e.target.value)}
/>

<input  
type="text" 
placeholder="description" 
value={description}   
onChange={(e) => setDescription(e.target.value)}
/> 

<input 
type="text" 
placeholder="image url" 
value={imageUrl}   
onChange={(e) => setImageUrl(e.target.value)}
/> 

<input 
type="submit" 
value="Add Image"
/>

</form>

      )
}

export default NewImage;