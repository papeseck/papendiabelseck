import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact