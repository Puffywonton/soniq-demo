import { useContext, useState } from "react"
import { QuizContext } from "../contexts/quiz"
import Button from "./Button"
import Dialog from "./Dialog"

/* eslint-disable react/prop-types */
const StartMenu = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const [shareDialog, setShareDialog] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        // dispatch({ type: 'START_GAME' })
        dispatch({type: 'SETUP_GAME'})
    }

    const handleShareDialog = () => {
        setShareDialog(!shareDialog)
    }

    return (
        <div className="startMenu">
            <img className="startMenu__logo" src="/soniq-demo/src/assets/pictures/logo_soniq.png" alt="logo" />
            <p>test your musical knowledge in a music quiz</p>
            {shareDialog ? <Dialog handleClick={handleShareDialog} /> : "" }
            <div className="startMenu__nav-buttons">
                <Button
                    handleClick={handleClick}
                    text="Start Game"
                />
                <Button
                    handleClick={handleShareDialog}
                    text="Share"
                />
            </div>
        </div>
    )
}

export default StartMenu

