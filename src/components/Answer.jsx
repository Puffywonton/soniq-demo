import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
const Answer = (props) => {
    // const [hasAnswered , setHasAnswered] = useState(false)
    // useEffect(() => {
        

    // }, [])

    const handleClick = (event) => {
        props.onClick(event.currentTarget)
    }

    const isCorrectAnswer = ( props.currentAnswer || !props.startRound ) && props.correctAnswerId == props.answer.songId
    const isWrongAnswer = props.currentAnswer == props.answer.songId && props.currentAnswer != props.correctAnswerId

    const correctAnswerClass = isCorrectAnswer ? 'correct' : ''
    const wrongAnswerClass = isWrongAnswer ? 'wrong' : ''
    const disabledClass = ( props.currentAnswer || !props.startRound ) ? 'disabled' : ''

    return (
        <div key={props.index} className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={handleClick} id={props.answer.songId}>
            <div className="answer__body">
                <span className="answer__body__title">{props.answer.songTitle}</span>
                <span className="answer__body__artist"> by {props.answer.songArtist}</span>
            </div>
            
        </div>
    )
}

export default Answer