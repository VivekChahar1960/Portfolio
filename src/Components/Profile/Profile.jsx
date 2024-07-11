import React from 'react'
import profile from '../../assets/profile-1.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import resume from '../../assets/resume.pdf'
import './Profile.css'

const Profile = () => {
    const opener= ()=>{
        window.open('https://www.linkedin.com/in/vivek-chahar-200a64203/')
    }
    const gitopener= ()=>{
        window.open('https://github.com/VivekChahar1960')
    }
  return (
    <div className='profile'>
        <div className='profile_pic'>
            <img src={profile} alt="" />
        </div>
        <div className='profile_details'>
            <p className='profile_p1'>Hello I'm</p>
            <h1>Vivek Chahar</h1>
            <p className='profile_p2'>Software Engineer</p>
            <div className='buttons'>
            <a href={resume} target="_blank"rel="noreferrer"><button className='btn resume-btn'>Resume</button></a>
            <a href="#contact"><button className='btn contact-btn'>Contact Me</button></a>
            </div>
            <div className="links">
                <img src={linkedin} alt=""  className='icon' onClick={opener}/>
                <img src={github} alt="" className='icon' onClick={gitopener}/>
            </div>
        </div>
    </div>
  )
}

export default Profile