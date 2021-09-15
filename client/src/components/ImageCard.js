import potato from '../media/potato.png'
import {BsTrash, BsPencil} from "react-icons/bs";



const ImageCard = () => {
    return (
        <div className="imagecard">
            <div className="user">
            
            <p >username1</p>
            <p className="edit"><BsPencil/></p>
            
            <p className="delete"><BsTrash/></p>
            </div>
            
           <div className="imagecontent">
               <img src={potato} alt="potato"></img>
            </div>
            <p>this is a potato, blah blah blah blah blah</p>
            <input type="text" placeholder="type a comment here..." className="comment"/>
        </div>
    )
}

export default ImageCard
