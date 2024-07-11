import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Title from './Components/Title/title'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    
    <div>
      
      <div className="container">
        <Navbar/>
        <Profile/>
        <Title subTitle='Get to Know More' title='About Me'/>
        <About/>
        <Title subTitle='Explore My' title='Experience'/>
        <Experience/>
        <Title subTitle='Browse My Recent' title='Projects'/>
        <Projects/>
        <Title subTitle='Get In Touch' title='Contact Me'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App