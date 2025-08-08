import "./Skills.scss";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";

import HTMLIcon from '../../assets/images/icons8-html5-240.png'
import CSSIcon from '../../assets/images//icons8-css3-240.png'
import JSIcon from '../../assets/images/icons8-javascript-240.png'
import ReactIcon from '../../assets/images/icons8-react-native-240.png'
import SassIcon from '../../assets/images/icons8-sass-240.png'
import GitIcon from '../../assets/images/icons8-git-240.png'
import GitHubIcon from '../../assets/images/icons8-github-240.png'
import FirebaseIcon from '../../assets/images/icons8-firebase-240.png'
import VsCodeIcon from '../../assets/images/icons8-visual-studio-code-2019-240.png'
import TypescriptIcon from '../../assets/images/icons8-typescript-240.png'
import NextIcon from '../../assets/images/icons8-nextjs-240.png'
import NodeIcon from '../../assets/images/nodejs.png'

const SKills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className=" skills-page container">
        <div className="bx-wrapper">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={"Skills & Experience".split("")}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <h3 className="subtitle">Technical Skills</h3>
          
          <div className="skills-text">
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <p>Python (NumPy, Pandas), Java, C++, C, C#, JavaScript/TypeScript, .NET</p>
            </div>
            
            <div className="skill-category">
              <h4>Web Technologies</h4>
              <p>HTML5, CSS, XML, Bootstrap, AngularJS, React Native, React.js, JavaScript (ES6+), Node.js</p>
            </div>
            
            <div className="skill-category">
              <h4>Cloud & DevOps</h4>
              <p>AWS, Azure, Docker, CI/CD, Apache Kafka, NiFi</p>
            </div>
            
            <div className="skill-category">
              <h4>Databases & Tools</h4>
              <p>PostgreSQL, MongoDB, Neo4j, FastAPI, REST APIs, Microservices</p>
            </div>
          </div>

          <h3 className="subtitle">My Tools</h3>

          <div className="tools">
            <img src={VsCodeIcon} alt="icons-img" className="skills-icon" />
            <img src={HTMLIcon} alt="icons-img" className="skills-icon" />
            <img src={CSSIcon} alt="icons-img" className="skills-icon" />
            <img src={JSIcon} alt="icons-img" className="skills-icon" />
            <img src={GitIcon} alt="icons-img" className="skills-icon" />
            <img src={GitHubIcon} alt="icons-img" className="skills-icon" />
            <img src={ReactIcon} alt="icons-img" className="skills-icon" />
            <img src={TypescriptIcon} alt="icons-img" className="skills-icon" />
            <img src={NodeIcon} alt="icons-img" className="skills-icon" />
          </div>
        </div>

        <div className="skills-spinner">

        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default SKills;
