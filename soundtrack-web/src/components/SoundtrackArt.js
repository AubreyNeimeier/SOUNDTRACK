import React from 'react'
import soundtrack from '../SoundTrack_Image.jpg'
const SoundtrackArt = (props) => {

        return (
            <div className="art-background">
            <a href="http://localhost:3000/about"><img src={soundtrack} alt="soundtrack_img" height="576" width="1064px" align="left"/></a>
            <div className="overlay">About</div>
            </div>         
        )
    }

export default SoundtrackArt
