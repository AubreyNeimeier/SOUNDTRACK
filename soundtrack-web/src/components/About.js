import React from 'react'
import NavBar from './NavBar'
const About = (props) => {
    
        return (
            <div className="center-flex">
            <NavBar />
                <p className="The Inspiration">Do you ever feel intese nostalgia when hearing a song? When the music that’s playing brings your right back to a certain memory, city, or time in your life? SoundTrack is a journal platform, that will eventually leverage Spotify’s API so that music and memories can interwine like they do in real life.</p>
                <p className="about-me">I am currently learning full stack web development as a scholarship recipient at The Flatiron School. My stack currently includes HTML, CSS, Ruby, SQL, Sinatra, Rack, ActiveRecord, Rails, jQuery, AJAX, JavaScript, React, Redux and GitHub. I have linked my GitHub account which contains 5 portfolio applications as pinned repositories. 
    My professional and educational background is in environmental engineering, compliance, and lean six sigma. I have worked in industry, corporate and consulting environments. I am an analytical problem solver with experience in marketing, conducting data analysis to deliver meaningful results, and project management. </p>
                    <a url="https://github.com/AubreyNeimeier"> GitHub Profile </a>
                    <a url="https://aubreyneimeier.github.io/"> Learn Blog </a> 
            </div>         
        )
    }

export default About
        