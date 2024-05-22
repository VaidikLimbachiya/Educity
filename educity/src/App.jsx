import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'

const App = () => {

  const[playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAMS' title='What we Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Galary' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonials/>
        <Title subTitle='Contact US' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
