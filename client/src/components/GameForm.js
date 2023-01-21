import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



const GameForm = () => {
    
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [serveTracker, setServeTracker] = useState(0)
    
    const increase1 = () => {
        setCounter1(counter1 + 1)
    }

    const increase2 = () => {
        setCounter2(counter2 + 1)
    }

    useEffect(() => {
        setServeTracker(counter1 + counter2)
    }, [counter1, counter2])
   

    const serve = serveTracker % 4 < 2 ? 'serve' : 'noserve'  
    
    return(
        <div>
            <p>GAME FORM HERE</p>

                <div>
                    <h1 className={serve}>{counter1}</h1>
                    <button onClick={increase1}>Add Point</button>
                </div>

                <div>
                    <h1 className={serve === 'noserve' ? 'serve' : 'noserve'}>{counter2}</h1>
                    <button onClick={increase2}>Add Point</button>
                </div>

                <div>
                    <p>{serveTracker}</p>
                </div>


            <Link to="/">Home</Link>
        </div>
    )
}

export default GameForm;