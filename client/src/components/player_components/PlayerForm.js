import { Link } from "react-router-dom";
import React, { useState } from 'react'

const PlayerForm = ({ addToPlayers }) => {

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
                    <fieldset className="player-select-form">
                        <legend className="select-to-proceed">NEW PLAYER PROFILE</legend>
                        <br />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <form className=""
                            onSubmit={handleSubmit}
                            data-testid="save-player-button">
                            <label className="select-to-proceed">NAME: </label>
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
                            <button className="confirm-button">CREATE</button>

                            <br />
                        </form>
                    </fieldset>
                    <Link to="/">BACK TO MENU</Link>
                </div>
            )}
        </div>
    )
};

export default PlayerForm;