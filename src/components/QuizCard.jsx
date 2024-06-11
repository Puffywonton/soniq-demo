import MiniPlayer from "../components/MiniPlayer"

/* eslint-disable react/prop-types */
const QuizCard = (props) => {

    return (
        <>
            <MiniPlayer
                currentSong={props.currentSong}
                songDuration={props.songDuration}
                timer={props.timer}
            />
            <div>
                <div>What is this song?</div>
                <div>song #{props.questionNumber}</div>
                <div>score {props.score}</div>
                <ul>
                    <li><button onClick={props.onClick} id="correct" >artist name - song name *correct answer*</button></li>
                    <li><button onClick={props.onClick} id="wrong1">artist name - song name *wrong answer*</button></li>
                    <li><button onClick={props.onClick} id="wrong2">artist name - song name *wrong answer*</button></li>
                    <li><button onClick={props.onClick} id="wrong3">artist name - song name *wrong answer*</button></li>
                </ul>
            </div>                   
        </>
    )
}

export default QuizCard