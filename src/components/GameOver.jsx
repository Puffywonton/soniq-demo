import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Button from "./Button"
import ShareBox from "./ShareBox"

/* eslint-disable react/prop-types */
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: 'RESTART_GAME'})
    }
    

    return (
        <div className="gameover">
            <div className="gameover__title">GAME OVER</div>
            <img className="gameover__picture" src="../../public/pictures/gameover-trophy.svg" alt="trophy" />
            <div className="gameover__scoreboard">
                <span className="gameover__scoreboard__text">You scored</span>
                <div className="gameover__scoreboard__score">
                    {quizState.score}
                    <img className="gameover__scoreboard__score__star" src="../../public/pictures/gameover-star.svg" alt="star" />
                </div>
            </div>
            <ShareBox />
            <div className="gameover__bottom-nav">
                <Button
                    handleClick={handleClick}
                    text="Main Menu"
                />
            </div>
            
        </div>
    )
}

export default GameOver