import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
function Hero() {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Najibullah Naziry</span>, full stack webdeveloper design response website with API fucntionality</h1>
      <p>i am a foendten webdeveloper from pakistan kahbyban</p>
      <div className='hero-action'>
       <div className='hero-connect'>Connect with me</div>
       <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
