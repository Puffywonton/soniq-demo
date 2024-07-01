import ShareBox from "./ShareBox"

/* eslint-disable react/prop-types */
const Dialog = (props) => {
    return (
        <dialog className="dialog" id="dialogBox">
            <div className="dialog__container">
                <ShareBox />
            </div>
        </dialog>
    )

}

export default Dialog