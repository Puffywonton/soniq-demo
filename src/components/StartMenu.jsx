/* eslint-disable react/prop-types */
const StartMenu = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
        props.setStartGame(true)
        props.setScore(0)
        props.setQuestionNumber(1)
    }

    return (
        <>
            <button onClick={handleClick}>Start Game</button>
        </>
        
    )
}

export default StartMenu