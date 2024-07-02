import Button from "./Button"
import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"

const GenreSelection = () => {
    const [quizState, dispatch] = useContext(QuizContext) 
    const genres = ['rock', 'pop', 'hiphop', 'jazz']


    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: 'START_GAME'})
    }

    const genreList = genres.map((genre) => {
        return (
            <li key={genre} className="genre-selection__list__item">
                <Button
                    handleClick={handleClick}
                    text={genre}
                />
            </li>
            
        )
    })

    return (
        <div className="genre-selection">
            <img className="genre-selection__logo" src="../../soniq-demo/src/assets/pictures/logo-text.jpg" alt="logo-text" />
            <h1 className="genre-selection__title">Select the genre</h1>
            <ul className="genre-selection__list">
                {genreList}
            </ul>
        </div>
    )
}

export default GenreSelection