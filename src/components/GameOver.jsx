import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"

/* eslint-disable react/prop-types */
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: 'RESTART_GAME'})
    }
    
    return (
        <>
            <div>GAME OVER</div>
            <div>your score is {quizState.score}</div>
            <button onClick={handleClick}>back to main menu</button>
        </>
    )
}

export default GameOver