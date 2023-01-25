import { useState, useEffect } from "react";
import VS from '../../images/VS.png';

const Counters = ({handleWin, player1, player2}) => {

    const [counterObj, setCounterObj] = useState({
        c1: 0,
        c2: 0
    });

    const increment = (counter) => {
        const temp = {...counterObj};
        temp[counter] += 1;
        setCounterObj(temp);
    }

    const [serveTracker, setServeTracker] = useState(0);
    const serve = serveTracker % 4 < 2 ? 'serve' : 'noserve';

    useEffect(() => {
        setServeTracker(counterObj.c1 + counterObj.c2);

        if (counterObj.c1 >= 11 && counterObj.c1 -2 >= counterObj.c2) {
            handleWin('player1', counterObj.c1, counterObj.c2);
            
        } else if (counterObj.c2 >= 11 && counterObj.c2 -2 >= counterObj.c1) {
            handleWin('player2', counterObj.c2, counterObj.c1);
        } 
        //  eslint-disable-next-line
    }, [counterObj])

    return (
        <div className="buttons-container">
            <div>
                <p className="player-name">{player1}</p>
                <button
                    onClick={() => { increment('c1') }}
                    >
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front text"> {counterObj.c1}
                        </span>
                </button>
                <p className={serve}>SERVE</p>
            </div>
            <img className="VS" src={VS} alt={"VS"}/>
            <div>
                <p className="player-name">{player2}</p>
                <button
                    onClick={() => { increment('c2') }}
                    data-testid="counter-button">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front text">{counterObj.c2}</span>
                </button>
                <p className={serve === 'noserve' ? 'serve' : 'noserve'}>SERVE</p>
            </div>  
        </div>
    )
}

export default Counters;
