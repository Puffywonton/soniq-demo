import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"

/* eslint-disable react/prop-types */
const StartMenu = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: 'START_GAME'})
    }

    return (
        <div className="startMenu">
            <img className="startMenu-logo" src="../../public/pictures/SoniqFullLogo.jpeg" alt="logo" />
            <button className="startMenu-button" onClick={handleClick}>Start Game</button>
        </div>
    )
}

export default StartMenu

