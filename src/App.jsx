import React from 'react'
import Navbar from './component/navbar/Navbar.jsx'
import Hero from './component/Hero/Hero.jsx'
import About from './component/About/About.jsx'
import Services from './component/Services/Services.jsx'
import MyWork from './component/MyWork/MyWork.jsx'
import Contact from './component/contact/Contact.jsx'
import Footer from './component/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services />
      <MyWork/>
      <Contact />
      <Footer/>
      
    </div>
  )
}

export default App
