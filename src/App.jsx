import { useState } from 'react'
import './App.scss'

import { About,Footer,Header,Skills,Testimonial,Works } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Works/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default App
