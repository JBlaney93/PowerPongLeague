import { useState, useEffect } from "react";

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
    const serve = (serveTracker-1) % 4 < 2 ? 'serve' : 'noserve';

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
        <div>
            <p>{player1}</p>
            <button
                onClick={() => { increment('c1') }}
                className={serve}>{counterObj.c1}
            </button>
            <p>{player2}</p>
            <button
                onClick={() => { increment('c2') }}
                data-testid="counter-button"
                className={serve === 'noserve' ? 'serve' : 'noserve'}>{counterObj.c2}
            </button>
        </div>
    )
}

export default Counters;
