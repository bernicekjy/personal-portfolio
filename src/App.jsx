import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, FooterSection} from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-1 bg-primary">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
      </div>
      <About/>
      <div className="bg-primary">
        <Experience/>
      </div>
      
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      
      <FooterSection/>
    </BrowserRouter>
  )
  }

export default App
