/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const MiniPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)

    useEffect(() => {
        setCurrentSong(new Audio(props.currentSongUrl))
    }, [props.currentSongUrl])
    
    useEffect(() => {
        if (!props.startRound) {
            setIsPlaying(false)
            currentSong.pause()
        }
    }, [currentSong, props.startRound])

    const playPauseSwitch = () => {
        if (!isPlaying) {
            currentSong.play()
            setIsPlaying(true)
        }
        else {
            currentSong.pause()
            setIsPlaying(false)
        }
    }
    return (
        <>
            <button className="miniPlayer" onClick={playPauseSwitch}>{isPlaying ? "Pause Music" : "click for sound"}</button>
        </>
    )
}
export default MiniPlayer
