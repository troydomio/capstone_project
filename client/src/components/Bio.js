import { useState } from "react";
import "../media/Bio.css"

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