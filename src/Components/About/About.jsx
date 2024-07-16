import React from 'react'
import './About.css'
import Profile from '../../assets/Vivek Profile.png'
import Edu from '../../assets/education.png'
import Exp from '../../assets/experience.png'
import Arrow from '../../assets/arrow.png'

const About = () => {

    const clikedarrow=()=>{
        location.href('experience')
    }

  return (
    <div>
        <div className='about'>
        <div className='about_profile'>
            <img src={Profile} alt="" />
        </div>
        <div className="about_details">
        <div className='main_details'>
            <div className='details'>
                <img src={Exp} alt="" />
                <h3>Experience</h3>
                <p>1+ Year <br />
                Frontend Developer</p>
            </div>
            <div className='details'>
                <img src={Edu} alt="" />
                <h3>Education</h3>
                <p>Btech Bachelors Degree <br /> From MDU, Rohtak </p>
            </div>
        </div>
        <div className='about_urself'>
            <p>Passionate Software Engineer and Full Stack Developer with expertise in Java, JavaScript, React.js, Node.js, Express.js, and Git. Strong foundation in data structures, algorithms, and object-oriented programming (OOP). Eager to contribute to innovative projects and advance career growth in a dynamic environment.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About
