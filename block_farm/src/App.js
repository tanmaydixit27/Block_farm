import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ChainUi from './components/ChainUi'
import About from './components/About'
import Service from './components/Service'
import Team from './components/Team'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Slider/> */}
      <ChainUi />
      <div className='container'>

        <About />
        <Service />
        <Team />

      </div>
      <Footer />
    </>
  )
}

export default App