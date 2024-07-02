import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        
    <img src={profile_img} alt="" />
    <h1><span>I'am Noushil Sharma,</span> Competitive Programmer and Web Developer.</h1>
    <p>I am frontend Developer and Competitive Programmer from IIIT Sonepat</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect</p></AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1G5veQ8QwO0HyPDulp74D5BI-I0xmOqCL/view">My Resume</a></div>
    </div>
    </div>
  )
}

export default Hero
