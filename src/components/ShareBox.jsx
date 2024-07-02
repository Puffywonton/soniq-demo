/* eslint-disable react/prop-types */
import {
    WhatsappIcon,
    WhatsappShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterShareButton,
    XIcon,
    TelegramIcon,
    TelegramShareButton,    
} from "react-share"

const ShareBox = (props) => {
    const shareUrl = "www.soniq.com"
    const message = props.gameOver ? `I just scored ${props.score} on a Soniq quiz, can you beat my score?` : `Check out this music quiz`
    const size = 40

    return (
        <div className="sharebox">
            <div className="sharebox__header">
                <div className="sharebox__header__title">Share with your friend</div>
                {!props.gameOver ? <button onClick={props.handleClick} className="sharebox__header__closeButton">&#x2715;</button> : ''}
            </div>
            <div className="sharebox__some-network">
                <FacebookShareButton
                    url={shareUrl}
                    className="sharebox__some-network__share-button"
                >
                    <FacebookIcon size={size} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"
                    className="sharebox__some-network__share-button"
                >
                    <FacebookMessengerIcon size={size} round />
                </FacebookMessengerShareButton>            
                <TwitterShareButton
                    url={shareUrl}
                    title={message}
                    className="sharebox__some-network__share-button"
                >
                    <XIcon size={size} round />
                </TwitterShareButton>
                <TelegramShareButton
                    url={shareUrl}
                    title={message}
                    className="sharebox__some-network__share-button"
                >
                    <TelegramIcon size={size} round />
                </TelegramShareButton>     
                <WhatsappShareButton
                    url={shareUrl}
                    title={message}
                    separator=":: "
                    className="sharebox__some-network__share-button"
                >
                    <WhatsappIcon size={size} round />
                </WhatsappShareButton>            
            </div>
            {!props.gameOver ?
                <div className="sharebox__link-container">
                    <div className="sharebox__link-container__title">Page Link</div>
                    <div className="sharebox__link-container__link">
                        <p>https://www.soniq.com</p>
                        <img className="sharebox__link-container__link__copy-icon" src="../../public/pictures/copy.svg" alt="copy" />
                    </div>
                </div>  
            : ''}

        </div>
    )
}

export default ShareBox