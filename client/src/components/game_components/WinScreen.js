const WinScreen = ({handleSaveGame}) => {
    return (
        <div>
            <p>GAME OVER</p>
            <br />
            <p> Save your game or return home</p>
            <br />
            <button onClick={()=>{handleSaveGame()}}>SAVE GAME</button>
        </div>
    )
 }
 
 
 export default WinScreen;