import { Link } from "react-router-dom";
import React,{useState} from 'react'

const PlayerForm = ({addToPlayers}) => {

    console.log(addToPlayers)
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value)
    };

    const [error, setError] = useState("");
    const [profileCreated, setProfileCreated] = useState(false);

    
    const handleSubmit = (event) => {

        event.preventDefault();

        if (!name) {
            setError("Name cannot be empty!");
            return;
        }
        
        const newPlayer = {name:name}
        addToPlayers(newPlayer)
        setProfileCreated(true);

        setName("")
    }

    return(
        <div>
        {profileCreated ? (
            <div>
                <p style={{ color: "green" }}>Profile created</p>
                <br />
                <Link to="/game-form">Start Game</Link>
                <br />
                <Link to="/">Back to menu</Link>
            </div>
        ) : (
            <div>
                <h2>New Player Profile</h2>
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input
                        value={name}
                        onChange={handleChange}
                        name="name"
                    />
                    <br />
                    <br />
                    <p>Choose an avatar: </p>
                    <br />
                    <br />
                    <p>SELECTION OF AVATAR IMAGES HERE</p>
                    <br />
                    <br />
                    <button>Create Player Profile</button>
                </form>
                <br />
                <Link to="/">Back to menu</Link>
            </div>
        )}
    </div>
    )
};

export default PlayerForm;