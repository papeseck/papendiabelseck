import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                    <div>
                        <p>123 Fass Delorm.</p>
                        <p>DAKAR</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                    00221 78 476 74 95</h4> 
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                    diabel1208@gmail.com</h4> 
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>This is me Pape Ndiabel seck. Developper & Ingenieur en informatque <br/>
                I enjoy discussing new project and design Challenges</p>
                <div className="social">
                  <a href="#">  <FaFacebook size={30} style={{color: "#fff" , marginRight:"1rem"}}/> </a>
                   <a href="#"> <FaTwitter size={30} style={{color: "#fff" , marginRight:"1rem"}}/> </a>
                 <a href="https://www.linkedin.com/in/pape-ndiabel-seck-0b2127216/">  <FaLinkedin size={30} style={{color: "#fff" , marginRight:"1rem"}}/> </a> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer