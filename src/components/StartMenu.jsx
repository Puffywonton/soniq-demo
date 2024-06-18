import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Button from "./Button"

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
            <Button
                handleClick={handleClick}
                text="Start Game"
            />
        </div>
    )
}

export default StartMenu

