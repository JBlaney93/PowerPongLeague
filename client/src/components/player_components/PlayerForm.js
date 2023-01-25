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
            setError("Please enter a name");
            return;
        }
        const newPlayer = { name: name }
        addToPlayers(newPlayer)
        setProfileCreated(true);
        setName("")
    }

    return (
        <div className="player-form">
            <div>
                <fieldset className="player-profile-form">
                    <legend className="new-player-profile-heading">NEW PLAYER PROFILE</legend>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {!profileCreated? (<form className=""
                        onSubmit={handleSubmit}
                        data-testid="save-player-button">
                        <input
                            className="new-player-name-field"
                            value={name}
                            onChange={handleChange}
                            name="name"
                            data-testid="input-field"
                            placeholder='player-name'
                        />
                        <br/>
                        <button className="confirm-button">CREATE</button>
                    </form>):(
                        <div>
                            <p style={{ color: "green" }}>Profile created</p>
                            <button onClick={()=>{setProfileCreated(false)}}className='confirm-button'>Add another player?</button>
                        </div>
                    )}
                </fieldset>
            </div>
        </div>
    )
};

export default PlayerForm;