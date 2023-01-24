const WinScreen = ({handleSaveGame}) => {
    return (
        <div>
            <p className="game-over">GAME OVER</p>
            <button onClick={()=>{handleSaveGame()}}>SAVE GAME</button>
        </div>
    )
 }
 
 
 export default WinScreen;