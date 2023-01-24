import { Link } from "react-router-dom";
import React, { useState } from 'react'

const PlayerForm = ({ addToPlayers }) => {

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
            setError("Please enter a name");
            return;
        }

        const newPlayer = { name: name }
        addToPlayers(newPlayer)
        setProfileCreated(true);

        setName("")
    }

    return (
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
                    <br />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form
                        onSubmit={handleSubmit}
                        data-testid="save-player-button">
                        <fieldset className="new-player-profile-form">
                            <legend className="new-player-profile">NEW PLAYER PROFILE</legend>
                                <label className="new-player-name">NAME: </label>
                                <input
                                    className="new-player-name-field"
                                    value={name}
                                    onChange={handleChange}
                                    name="name"
                                    data-testid="input-field"
                                />
                                <br />
                                <br />
                                <label className="choose-avatar">Choose an avatar: </label>
                                <br />
                                <br />
                                <p>SELECTION OF AVATAR IMAGES HERE</p>
                                <br />
                                <br />
                                <button className="create-player-profile">CREATE</button>
                                <br />
                                <Link className="back-to-menu" to="/">BACK TO MAIN MENU</Link>
                        </fieldset>
                    </form>
                </div>
            )}
        </div>
    )
};

export default PlayerForm;