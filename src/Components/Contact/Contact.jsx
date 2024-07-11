import React from 'react'
import './Contact.css'
import Mail from '../../assets/email.png'
import Linkedin from '../../assets/linkedin-bw.png'

const Contact = () => {
    const Linkedinclicked=()=>{
        window.open('https://www.linkedin.com/in/vivek-chahar-200a64203/')
    }

  return (
    <div className='main-contact'>
        <div className='contact'>
            <div className='details-contact'>
                <img src={Mail} alt="" />
                <p><a href="mailto:vivekchahar1960@gmail.com">vivekchahar1960@gmail.com</a></p>
            </div>
            <div className='details-contact'>
                <img src={Linkedin} alt="" />
                <p onClick={Linkedinclicked}>Vivek Chahar</p>
            </div>
        </div>
    </div>
  )
}

export default Contact