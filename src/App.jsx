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
      <div className="bg-[#FED5AB]">
        <About/>      
        <Tech/>
      </div>
      
      <div className="bg-primary">
        <Experience/>
      </div>
      

      
      <div className="bg-navy-blue relative z-0">
        <Works/>
        <Contact/>
        <StarsCanvas/>
      </div>
      <FooterSection/>
    </BrowserRouter>
  )
  }

export default App
