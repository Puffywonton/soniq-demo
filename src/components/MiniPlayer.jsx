/* eslint-disable react/prop-types */
import { useState } from "react"

const MiniPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const playPauseSwitch = () => {
        if (!isPlaying) {
            props.currentSong.play()
            setIsPlaying(true)
        }
        else {
            props.currentSong.pause()
            setIsPlaying(false)
        }
    }

    return (
        <>
            <button onClick={playPauseSwitch}>{isPlaying ? "Pause Music" : "Verify Music is loaded"}</button>
            <p>song length: {props.songDuration}s</p>
            <p>timer: {props.timer}s</p>
        </>
    )
}

export default MiniPlayer
