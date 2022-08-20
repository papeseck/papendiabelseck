import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        
        <div className="left">
            <h1> Who AM I ?</h1>
            <p> I'm Full stack developer. I create responsive secure website </p>
            <Link to="/contact"> 
            <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img src="https://image.shutterstock.com/image-vector/vector-collection-web-development-shield-600w-1757407325.jpg" className="img" alt="true"/>

                </div>
                <div className="img-stack bottom">
                    <img src="https://image.shutterstock.com/image-vector/react-js-populat-javascript-framework-600w-1494258608.jpg" className="img" alt="true"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent