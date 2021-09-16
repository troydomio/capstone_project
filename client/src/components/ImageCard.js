import potato from "../media/potato.png";
import { BsTrash, BsPencil } from "react-icons/bs";

const ImageCard = ({ image, deleteItem }) => {
  const deleteImage = () => {
    fetch(`images/${image.id}`, {
      method: "DELETE",
    });
    deleteItem(image.id);
  };

  return (
    <div className="imagecard">
      <div className="user">
        <p>user id: {image.user_id}</p>
        <p className="edit">
          <BsPencil />
        </p>

        <p className="delete">
          <BsTrash onClick={deleteImage} />
        </p>
      </div>

      <div className="imagecontent">
        <img src={image.image_url} alt="potato"></img>
      </div>
      <p>{image.description}</p>
      {/* <input type="text" placeholder="type a comment here..." className="comment"/> */}
    </div>
  );
};

export default ImageCard;
