import "./NavbarStyles.css"
import pape from "../assets/pdso.jpeg";
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"


const Navbar = () => {

        const [click , setClick]= useState(false)
        const handleClick = () => setClick(!click)

  return (
    <div className="header">
        <Link to='/'> 
        <img src={pape} style={{ width:"100px" , height:"90px" ,borderRadius:"15px"}}/>
        </Link>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click  ? (<FaTimes size={20} style={{color: "#fff"}}/>) :
                ( <FaBars size={20} style={{color: "#fff"}}/>)
            }
            
           
        </div>

    </div>
  )
}

export default Navbar