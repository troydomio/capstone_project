import potato from '../media/potato.png'
import {BsTrash, BsPencil} from "react-icons/bs";
import { useState } from 'react';

const ImageCard = ({image, deleteItem, onUpdate}) => {

    const [updatedTitle, setUpdatedTitle] = useState(image.title);
    const [updatedDescription, setUpdatedDescription] = useState(image.description);
    const [updatedImage, setUpdatedImage] = useState(image.image_url);
    const [editing, setEditing] = useState(false);

    const deleteImage = () => {
        fetch(`images/${image.id}`, {
      method: "DELETE",
    });
    deleteItem(image.id);
    }

    const updateImage = (e) => {
        e.preventDefault();
        fetch(`images/${image.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: updatedTitle,
               description: updatedDescription,
               image_url: updatedImage
            }),
            })
            .then(response => response.json())
            .then(data => onUpdate(data));
    }

    function handleEdit(){
        setEditing(!editing)
      }

    return (
        <div className="imagecard">
            <div className="user">
            
            <p>user: {image.user.username}</p>
            <p className="edit"><BsPencil onClick={handleEdit}/></p>
            {editing?(
                    <div>
                    <form onSubmit={updateImage}>
                    <input
                    type="text"
                    placeholder="Title"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
<br />
                    <input
                    type="text"
                    placeholder="Description"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
<br />
                    <input
                    type="string"
                    placeholder="Image"
                    value={updatedImage}
                    onChange={(e) => setUpdatedImage(e.target.value)}
                    />  
                    <button type="submit" >Save</button>
                  </form>
                </div>
                ) : (
                  null)
                    }
            
            <p className="delete"><BsTrash onClick={deleteImage}/></p>
            </div>
            
           <div className="imagecontent">
               <img src={image.image_url} alt="potato"></img>
            </div>
            <p>{image.description}</p>
            {/* <input type="text" placeholder="type a comment here..." className="comment"/> */}
        </div>
    )
}

export default ImageCard
