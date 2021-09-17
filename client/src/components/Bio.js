import { useState } from "react";
<<<<<<< HEAD
import "../media/Bio.css"
=======

>>>>>>> fa51333d8d871710d6161f4d6341c9380fe75ef5
function Bio({ user, setUser }) {
    const [bioInput, setBioInput] = useState("")
    const [bio, setBio] = useState("")
    const handleSubmit = async (e) => {
        setBio(bioInput)

        e.preventDefault();
        const response = await fetch("/user", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bio: bioInput
            }),
        })
        const data = await response.json();

        if (response.ok) {
            setBioInput('');
            setUser(data);
        } else {
            // setErrors(data.errors)
        }
    };

    return (

        <div className="bio">
            <h2 className="bioItem1">Bio: {user.bio}</h2>
            <textarea className="bioBox bioEnd" placeholder="start writing your bio here!" onChange={(e) => setBioInput(e.target.value)} value={bioInput}></textarea>
            <button className="bioEnd" onClick={handleSubmit}>submit</button>
        </div >
    )


}
export default Bio