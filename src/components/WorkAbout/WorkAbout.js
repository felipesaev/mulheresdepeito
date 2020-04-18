import React from 'react'
import { Link } from "gatsby"


import './WorkAbout.scss'

const WorkAbout = () => {
  return (
    <section className="container bg-pink">
      <div className="flex">
        <div>
        <h2 className="has-line-top">Descubra mais como ajudar</h2>
        </div>
        <Link to="/">
         <button className="btn" >Participe</button>
         </Link>
         </div>
    </section>
  )
}

export default WorkAbout