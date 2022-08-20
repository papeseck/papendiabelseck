import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <WorkCard/>
      <AboutContent/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home