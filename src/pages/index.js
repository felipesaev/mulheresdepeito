import React from "react"

//Components
import Nav from '../components/Navigation/Nav'
import Header from '../components/Header/Header'
import About from '../components/PageAbout/About'
import WorkAbout from '../components/WorkAbout/WorkAbout'
import Footer from '../components/Footer/Footer'

import './index.scss'


const App = () => (
  <>
 <Nav/>
 <Header/>
 <About/>
 <WorkAbout/>
 <Footer/>
  </>
)

export default App
