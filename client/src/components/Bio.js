import { useState } from "react";
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

        <div>
            <h2>Bio</h2>
            <div>{user.bio}</div>
            <input placeholder="start writing your bio here!" onChange={(e) => setBioInput(e.target.value)} value={bioInput}></input>
            <button onClick={handleSubmit}>submit</button>
        </div >
    )


}
export default Bio