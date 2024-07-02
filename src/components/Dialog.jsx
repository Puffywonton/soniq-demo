import ShareBox from "./ShareBox"

/* eslint-disable react/prop-types */
const Dialog = (props) => {
    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
            props.handleClick()
        }
    }
    return (
        <dialog className="dialog" id="dialogBox" onClick={handleClick}>
            <div className="dialog__container">
                <ShareBox gameOver={false} handleClick={props.handleClick} />
            </div>
        </dialog>
    )

}

export default Dialog