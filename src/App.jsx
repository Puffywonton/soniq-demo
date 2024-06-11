
import { useEffect, useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import StartMenu from './components/StartMenu'
import GameOver from './components/GameOver'


function App() {
  let audioElement = new Audio('../../public/songs/songPlaceholder.mp3')


  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [startGame, setStartGame] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [currentSong, setCurrentSong] = useState(new Audio('../../public/songs/songPlaceholder.mp3'))
  const [timeIsOut, setTimeIsOut] = useState(false)
  const [roundStart, setRoundStart] = useState(false)
  const [songDuration, setSongDuration] = useState(25)
  const [timer, setTimer] = useState(99)


  // setup timer and soundDuration
  useEffect(() => {
      // let songLengthInSeconds = currentSong.duration.toFixed(0)
      let songLengthInSeconds = 5
      return () => {
          setSongDuration(songLengthInSeconds);
          setTimer(songLengthInSeconds)
      };        
  }, [currentSong])  

  // timer:
  useEffect(() => {
      let interval = null;
      if (startGame && timer !== 0) {
          interval = setInterval(() => {
              setTimer((timer) => timer - 1);
          }, 1000);
      }
      else {
          clearInterval(interval)
          setTimeIsOut(true)
      }
      return () => {
          clearInterval(interval)
      }
  }, [timer, startGame])



  useEffect(() => {
    if (timeIsOut) {
      console.log("TIMER IS OUT")
      loadNextQuestion()
      setTimeIsOut(false)
    }
  }, [timeIsOut])

  const loadNextQuestion = () => {
    if (questionNumber > 3) {
      setStartGame(false)
      setGameOver(true)
    } else {
      setQuestionNumber((prev) => prev + 1)
      setCurrentSong(audioElement)
      console.log("loading next song")
    }
  }

  const handleAnswerClick = (e) => {
    e.preventDefault()
    const answerId = e.target.id
    console.log("you clicked", answerId)
    if (answerId == "correct") {
      setScore((prev) => prev + 1)
    }
    loadNextQuestion()
  }


  return (
    <>
      <h1>Soniq Demo</h1>
      {!startGame && !gameOver ?
        <StartMenu
          setStartGame={setStartGame}
          setScore={setScore}
          setQuestionNumber={setQuestionNumber}
        />
      : ''}
      {startGame ? 
        <QuizCard
          score={score}
          setScore={setScore}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          onClick={handleAnswerClick}
          currentSong={currentSong}
          songDuration={songDuration}
          timer={timer}
        />
        : ""}
      {gameOver ? 
        <GameOver
          score={score}
          setStartGame={setStartGame}
          setGameOver={setGameOver}
        />
      : ""}
    </>
  )
}

export default App
