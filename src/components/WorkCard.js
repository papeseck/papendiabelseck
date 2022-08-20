import "./WorkCardStyle.css";
import img from "../assets/capture.png";
import img1 from "../assets/pp.png";
import portfolio from "../assets/portfolio.png";
import port from "../assets/port.png";
import pape from "../assets/redux.png";
import pds from "../assets/hooks.png";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={img} alt="image" style={{ width: "300px",height:"130px" }} />
          <img src={img1} alt="image" style={{ width: "300px",height:"130px" }} />
          <h2 className="project-title">  WEB DESIGN</h2>
          <div className="pro-details">
            <p >avic..Shop ,un site  e-commerce de vente de volaille</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn" >
                VIEW
              </NavLink>
              <a href="https://github.com/papeseck/gitProjetFinal"> <button  className="btn">
                SOURCE
              </button> </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={portfolio} alt="image" style={{ width: "300px" ,height:"130px"}} />
          <img src={port} alt="image" style={{ width: "300px",height:"130px" }} />
          <h2 className="project-title"> MY PORTEFOLIO WEB </h2>
          <div className="pro-details">
            <p>my portfolio web , un site perso................................</p>
            <div className="pro-btns">
            <a href="https://cryptic-island-58592.herokuapp.com"><button  className="btn"> 
               VIEW
              </button> </a>
              <a href="https://github.com/papeseck/gitPortfolio2.git"><button  className="btn"> 
                SOURCE
              </button> </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pape} alt="image" style={{ width: "300px" , height:"130px"}} />
          <img src={pds} alt="image" style={{ width: "300px" ,height:"130px"}} />
          <h2 className="project-title"> REACT (hooks et redux) </h2>
          <div className="pro-details">
            <p>des projets que j'ai realisés pendant ma formation</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                VIEW
              </NavLink>
             <a href="https://github.com/papeseck/gitredux"> <button to="" className="btn">
                SOURCE
              </button> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
