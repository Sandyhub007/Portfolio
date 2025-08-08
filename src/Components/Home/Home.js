import React, { useEffect, useState } from 'react'
import './Home.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
// import ProfileImage from '../ProfileImage/ProfileImage'
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'S', 'a', 'n', 'd', 'i', 'l', 'y', 'a', ' ', 'C', 'h', 'i', 'm', 'a', 'l', 'a', 'm', 'a', 'r', 'r', 'i']
  const jobArray1 = []
  const jobArray2 = []

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />


          </h1>
          <h2>Full Stack Developer / Web Developer / Software Engineer / Cloud Developer</h2>

          <div className="hire-me">
            <a href={`https://drive.google.com/file/d/1KvlZ52G1wJlF6SySHu5GJR__S4PtVztI/view?usp=sharing`} className='flat-button'>View Resume</a>
          </div>
        </div>

        {/* <ProfileImage/> */}
      </div>
      <Loader type='pacman' />
    </>

  )
}

export default Home 