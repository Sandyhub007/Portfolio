import "./Skills.scss";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAws, 
  faJava, 
  faReact, 
  faDocker 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faCloud, 
  faCogs,
  faServer
} from "@fortawesome/free-solid-svg-icons";

import HTMLIcon from '../../assets/images/icons8-html5-240.png'
import CSSIcon from '../../assets/images//icons8-css3-240.png'
import JSIcon from '../../assets/images/icons8-javascript-240.png'
import ReactIcon from '../../assets/images/icons8-react-native-240.png'
import GitIcon from '../../assets/images/icons8-git-240.png'
import GitHubIcon from '../../assets/images/icons8-github-240.png'
import VsCodeIcon from '../../assets/images/icons8-visual-studio-code-2019-240.png'
import TypescriptIcon from '../../assets/images/icons8-typescript-240.png'
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

          <h3 className="subtitle">My Tools</h3>

          <div className="tools">
            <img src={VsCodeIcon} alt="VS Code" className="skills-icon" />
            <img src={HTMLIcon} alt="HTML5" className="skills-icon" />
            <img src={CSSIcon} alt="CSS3" className="skills-icon" />
            <img src={JSIcon} alt="JavaScript" className="skills-icon" />
            <img src={GitIcon} alt="Git" className="skills-icon" />
            <img src={GitHubIcon} alt="GitHub" className="skills-icon" />
            <img src={ReactIcon} alt="React" className="skills-icon" />
            <img src={TypescriptIcon} alt="TypeScript" className="skills-icon" />
            <img src={NodeIcon} alt="Node.js" className="skills-icon" />
            
            {/* New Technology Icons */}
            <div className="fontawesome-icon skills-icon" title="AWS">
              <FontAwesomeIcon icon={faAws} size="4x" color="#FF9900" />
            </div>
            <div className="fontawesome-icon skills-icon" title="Java">
              <FontAwesomeIcon icon={faJava} size="4x" color="#ED8B00" />
            </div>
            <div className="fontawesome-icon skills-icon" title="C++">
              <FontAwesomeIcon icon={faCogs} size="4x" color="#00599C" />
            </div>
            <div className="fontawesome-icon skills-icon" title="PostgreSQL">
              <FontAwesomeIcon icon={faDatabase} size="4x" color="#336791" />
            </div>
            <div className="fontawesome-icon skills-icon" title="MSSQL">
              <FontAwesomeIcon icon={faDatabase} size="4x" color="#CC2927" />
            </div>
            <div className="fontawesome-icon skills-icon" title="Apache Kafka">
              <FontAwesomeIcon icon={faServer} size="4x" color="#231F20" />
            </div>
            <div className="fontawesome-icon skills-icon" title="Apache NiFi">
              <FontAwesomeIcon icon={faCloud} size="4x" color="#728E9B" />
            </div>
            <div className="fontawesome-icon skills-icon" title="Kubernetes">
              <FontAwesomeIcon icon={faDocker} size="4x" color="#326CE5" />
            </div>
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
