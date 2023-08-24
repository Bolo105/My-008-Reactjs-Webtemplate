import React from 'react'
import { Carousel } from './Carousel'
import { About } from './About'
import { Features } from './Features'
import { Services } from './Services'
import { Projects } from './Projects'
import { Team } from './Team'
import { BacktoTopButt } from './BacktoTopButt'
import { Contact } from './Contact'

export const Base = () => {
  return (
    <div>
        <Carousel />
        <About />
        <Features />
        <Services />
        <Projects />
        <Team />
        <Contact />
        <BacktoTopButt />
    </div>
  )
}
