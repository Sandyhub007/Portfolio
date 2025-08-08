import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../Components/AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const refForm = useRef();

  // SEND EMAIL  CLICK EVENT
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7bnytu9",
        "template_6i5lggn",
        refForm.current,
        "yzslRO5iFy-l8bDiE"
      )
      .then(
        function (response) {
          setEmailStatus(
            "MESSAGE SUCCESSFULLY SENT!"
          );
          setTimeout(() => {
            setEmailStatus("");
          }, 3000);
          // Clear the form after successful send
          refForm.current.reset();
        },
        function (error) {
          setEmailStatus("MESSAGE FAILED. Please try again or email me directly at chsandilya456@gmail.com");
          setTimeout(() => {
            setEmailStatus("");
          }, 5000);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in full-time opportunities and exciting projects in software engineering.
            Whether you have a question about my work, want to discuss potential opportunities,
            or just want to connect, don't hesitate to reach out using the form below.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input
                    type="submit"
                    className=" send-btn flat-button"
                    value="SEND"
                  />
                </li>
              </ul>

              <p className="email-status-text">{emailStatus}</p>
            </form>
          </div>
        </div>

        <div className="map">
          <div className="info-map">
            <h4 className="name">Sandilya Chimalamarri</h4>
            <h4 className="location">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              Sunnyvale, CA
            </h4>
            <a href="mailto:chsandilya456@gmail.com" className="email">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              chsandilya456@gmail.com
            </a>
          </div>
          <div className="map-wrapper">
            <MapContainer center={[37.3688, -122.0363]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[37.3688, -122.0363]}>
                <Popup>Sandilya is based in Sunnyvale, CA. Let's connect! ☕</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
