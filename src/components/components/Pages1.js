import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavbarTop } from './NavbarTop'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Base } from './Base'
import { Carousel } from './Carousel'
import { About } from './About'
import { Features } from './Features'
import { Services } from './Services'
import { Projects } from './Projects'
import { Team } from './Team'
import { BacktoTopButt } from './BacktoTopButt'
import { Contact } from './Contact'

export const Pages1 = () => {
  return (
    <div>
        <Router>
            <NavbarTop />
            <Navbar />
               <Routes>
                  <Route path='/' element={<Base />} />
                  <Route path='/header-carousel' element={<Carousel />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/features' element={<Features />}/>
                  <Route path='/services' element={<Services />}/>
                  <Route path='/projects' element={<Projects />}/>
                  <Route path='/team' element={<Team />}/>
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/back' element={<BacktoTopButt />} />
               </Routes>
            <Footer />
        </Router>
    </div>
  )
}
