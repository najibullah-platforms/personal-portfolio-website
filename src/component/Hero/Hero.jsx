import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.svg'
function Hero() {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Najibullah Naziry</span>, full stack webdeveloper design response website with API fucntionality</h1>
      <p>i am a foendten webdeveloper from pakistan kahbyban</p>
      <div className='hero-action'>
       <div className='hero-connect'><AnchorLink className="anchor-link" ofset={50} href="#contact">Connect with me</AnchorLink></div>
       <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
