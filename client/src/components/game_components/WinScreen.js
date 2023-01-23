const WinScreen = ({handleSaveGame}) => {
    return (
        <div>
            <p>game over! save your game or return home</p>
            <button onClick={()=>{handleSaveGame()}}>save game</button>
        </div>
    )
}

export default WinScreen;