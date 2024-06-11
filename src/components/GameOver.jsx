/* eslint-disable react/prop-types */
const GameOver = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        props.setStartGame(false)
        props.setGameOver(false)
    }
    return (
        <>
            <div>GAME OVER</div>
            <div>your score is {props.score}</div>
            <button onClick={handleClick}>back to main menu</button>
        </>
    )
}

export default GameOver