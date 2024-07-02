import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Answer from "./Answer"
import MiniPlayer from "../components/MiniPlayer"
import Timer from "./Timer"

/* eslint-disable react/prop-types */
const QuizCard = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const goNextTimer = () => {
        const timerBetweenQuestion = setTimeout(() => {
            dispatch({ type: 'NEXT_QUESTION' })
        }, 1500)    
         return () => clearTimeout(timerBetweenQuestion)
    }

    const handleAnswerClick = (e) => {
        const answerId = e.id
        console.log("you clicked", answerId)
        dispatch({ type: 'SELECT_ANSWER', payload: answerId })
        goNextTimer()
    }

    const handleNextButton = (e) => {
        e.preventDefault()
        dispatch({ type: 'NEXT_QUESTION'})
    }

    const handleHomeButton = (e) => {   
        e.preventDefault()
        dispatch({type: 'RESTART_GAME'})
    }

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

    return (
        <>
            <MiniPlayer
                currentSongUrl={quizState.currentSongUrl}
                startRound={quizState.startRound}
            />
            <div className="quizCard">
                <div className="quizCard__header">
                    <div className="quizCard__header__questionNumber">
                        {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <img className="quizCard__header__logo" src="../../public/pictures/logo-text.jpg" alt="logo-text"  onClick={handleHomeButton}/>
                    <div className="quizCard__header__score">
                        {quizState.score} points
                    </div>
                </div>
                <Timer
                    questionNumber={quizState.currentQuestionIndex}
                    setRoundOver={() => { dispatch({ type: 'QUESTION_TIMEOUT' }) }}
                    startRound={quizState.startRound}
                    currentAnswer={quizState.currentAnswer}
                    correctAnswerId={currentQuestion.correctAnswer.songId}    
                    goNext={goNextTimer}
                />
                <div className="quizCard__question">{currentQuestion.question}</div>                
                <div className="quizCard__answers">
                    {quizState.answers.map((answer, index) => (
                        <Answer
                            answer={answer}
                            key={index}
                            onClick={handleAnswerClick}
                            currentAnswer={quizState.currentAnswer}
                            correctAnswerId={currentQuestion.correctAnswer.songId}
                            startRound={quizState.startRound}
                        />
                    ))}
                </div>
                
                <button className="dev__nextButton" onClick={handleNextButton}>
                    next question
                </button>
            </div>                   
        </>
    )
}

export default QuizCard