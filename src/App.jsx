
import { useContext } from 'react'
import './App.scss'
import QuizCard from './components/QuizCard'
import StartMenu from './components/StartMenu'
import GameOver from './components/GameOver'
import { QuizContext } from './contexts/quiz'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)
  // let audioElement = new Audio('../../public/songs/songPlaceholder.mp3')

  return (
    <>
      {!quizState.startGame && !quizState.gameOver ?
        <StartMenu />
      : ""}
      {quizState.startGame && !quizState.gameOver ? 
        <QuizCard />
      : ""}
      {quizState.gameOver ? 
        <GameOver />
      : ""}
    </>
  )
}

export default App
