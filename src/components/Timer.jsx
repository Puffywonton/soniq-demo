/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const Timer = ({ setRoundOver, startRound, currentAnswer, correctAnswerId, goNext }) => {
    const timerPreset = 10
    const [timer, setTimer] = useState(timerPreset)

    useEffect(() => {
        if (startRound) {
            if (timer === -1) {
                setTimer(timerPreset)
                return () => {
                    setRoundOver(true)
                    goNext()
                }
            } 
            const interval = setInterval(() => {
                setTimer(prev=>prev-1)
            }, 1000)
            return () => clearInterval(interval)
        } else {
            setTimer(timerPreset)
        }
        
    }, [setRoundOver, timer, startRound, goNext])

    const strokeDashoffset = 440 * (timer / timerPreset)
    const isFinalCountdown = timer < 5 ? 'final-countdown' : ''

    const isCorrectAnswer = correctAnswerId == currentAnswer

    return (
        <div className={`timer ${isFinalCountdown}`}>
            <svg className="timer__circle">
                <circle className="timer__circle__first" cx="70" cy="70" r="70"></circle>
                <circle
                    className="timer__circle__second"
                    cx="70"
                    cy="70"
                    r="70"
                    style={{ strokeDashoffset }}
                ></circle>
            </svg>
            <div className="timer__display">
                {startRound && timer < timerPreset ?
                    <div className="timer__display__number">{timer + 1}</div>
                : ""}
                {startRound && timer == timerPreset ?
                    <div className="timer__display__go go-animation">GO</div>
                : ""}
                {!startRound && isCorrectAnswer ?
                    <img className="timer__display__correct result-animation" src="../../public/pictures/correct.svg" alt="correct" />
                : ""}
                {!startRound && !isCorrectAnswer ?
                    <img className="timer__display__wrong result-animation" src="../../public/pictures/wrong.svg" alt="wrong" />
                : ""}
            </div>
            <p className="dev__timerFeedback"> {!startRound ? "TIMEOUT // ANSWER SELECTED" : ""} </p> 
        </div>
    )
}

// don't forget to remove timerFeedback

export default Timer