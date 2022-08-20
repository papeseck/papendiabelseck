import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="ABOUT." text="Im friendly Full stack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About