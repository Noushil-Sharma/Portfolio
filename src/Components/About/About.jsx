import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile.webp';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
            <img className="profilep"src={profile_img} alt="" />
        </div> */}
        <div className="about-right">
            <div className="about-para">
                <p>I am a prefinal student at IIIT Sonepat, specializing in web development and competitive programming. As a passionate problem solver and full stack developer, I enjoy creating efficient and scalable web applications. My skills span both front-end and back-end technologies, enabling me to deliver complete, user-friendly solutions. I am constantly seeking new challenges to enhance my technical expertise and contribute to impactful projects.</p>
                <p> I am constantly seeking new challenges to enhance my technical expertise and contribute to impactful projects.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React Js</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Java Script</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-acheievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-acheievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-acheievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
