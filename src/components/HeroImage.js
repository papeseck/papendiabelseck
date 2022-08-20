import "./HeroImageStyle.css";
import React from "react";
import { Link } from "react-router-dom";


const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        
        <img
          className="into-img"
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>

      <div className="content">
        <p>HI , I'AM A WEB DEVELOPER</p>
        <h1>Full Stack Developer.</h1>
        <h3>
          Certified full stack developer, computer enthusiast, I learned to code
          in various computer languages ​​(Javascript, PHP, REACTJS,NODE JS etc.) and
          created personal projects, including an e-commerce site. Versatile, I
          master the different technical stages of creating a website or a web
          application; from understanding user needs, to frontend and backend
          development and maintenance.
        </h3>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
