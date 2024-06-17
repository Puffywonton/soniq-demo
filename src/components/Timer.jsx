/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const Timer = ({setRoundOver, startRound}) => {
    const [timer, setTimer] = useState(5)

    useEffect(() => {
        if (startRound) {
            if (timer === 0) {
                setTimer(5)
                return setRoundOver(true)
            } 
            const interval = setInterval(() => {
                setTimer(prev=>prev-1)
            }, 1000)
            return () => clearInterval(interval)
        } else {
            setTimer(5)
        }
        
    }, [setRoundOver, timer, startRound])

    return (
        <div>
            <p>timer left: {timer}s</p>
            <p> {!startRound ? "TIMEOUT // ANSWER SELECTED" : ""} </p>
        </div>
    )
}

export default Timer