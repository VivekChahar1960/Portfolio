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
            <p>UG eager Software Developer adapt in web Technology to apply excellent analytical and developmental skills, aiming to learn and gain new experiences, while utilizing interpersonal skills to contribute to business goals. Strong foundation in algorithms, data structures, and OOP concepts . Eager to work in a dynamic organization with opportunities for career growth, demonstrating quick learning and problem-solving abilities.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About