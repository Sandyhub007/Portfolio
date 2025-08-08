import React, { useEffect, useState } from "react";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { Link } from "react-router-dom";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone ">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>

          <h3 className="subtitle">
            I'm Sandilya Chimalamarri
            <span className="stack"> &lt;A Full Stack Developer/&gt;</span>
          </h3>
          <p>
            I'm a Master's student in Software Engineering at San Jose State University with 2+ years of experience as a full-stack developer. I've worked with technologies like Java, Python, React, FastAPI, and modern cloud platforms like AWS and Azure. My strengths include building scalable web apps, optimizing backend systems, and working with real-time data using tools like Apache Kafka and NiFi.
          </p>

          <p>
            I enjoy solving real-world problems through code, especially in agile and cross-functional teams. I've also led project initiatives, mentored junior developers, and consistently improved system performance and reliability.
          </p>

          <p>
            My experience spans across full-stack development using Python, Java, React.js and modern cloud-native technologies. I'm proficient in building scalable, high-performance web applications and microservices in Agile environments. I'm skilled in integrating REST APIs, optimizing database queries, and applying QA/testing best practices.
          </p>
          <p>
            Right now, I'm diving deeper into big data, machine learning, and system design, and I'm looking for opportunities where I can grow as an engineer and build impactful products. I have experience in cross-functional collaboration and hybrid team setups, with a strong foundation in CI/CD, AWS and Azure.
          </p>
          <p>
            Whether you're looking to build a new application from scratch or optimize an existing system, I'm here to help. Let's work together to create something impactful and scalable!
          </p>

          <div className="contact-btn">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#333333" />
            </div>
          </div>
        </div>
      </div>

      <Loader type={"pacman"} />
    </>
  );
};

export default About;
