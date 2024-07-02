
import { useContext } from 'react'
import './App.scss'
import QuizCard from './components/QuizCard'
import StartMenu from './components/StartMenu'
import GameOver from './components/GameOver'
import { QuizContext } from './contexts/quiz'
import GenreSelection from './components/GenreSelection'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  // console.log(quizState)
  // let audioElement = new Audio('../../public/songs/songPlaceholder.mp3')

  return (
    <>
      {!quizState.startGame && !quizState.gameOver && !quizState.setupGame ?
        <StartMenu />
      : ""}
      {!quizState.startGame && !quizState.gameOver && quizState.setupGame ?
        <GenreSelection />
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
