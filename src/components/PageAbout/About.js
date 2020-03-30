import React from 'react'
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './About.scss'

const About = () => {
  
  const {iconsImage} =  useStaticQuery(
    graphql`
      query {
        iconsImage: file(relativePath: { eq: "logop.png"}) {
          childImageSharp {
            fixed(width:86, height:86) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  return (
    <section id="about" className="container">
      <h2 className="has-line-top">Mulhres de peito</h2>
      <div className="flex">
        <div className="mb-2">
        <Img fixed={iconsImage.childImageSharp.fixed} alt="" />
          <h3>Mulheres</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus iusto expedita id ex eligendi numquam commodi.</p>
        </div>
        <div  className="mb-2">
        <Img fixed={iconsImage.childImageSharp.fixed} alt="" />
          <h3>Mulheres</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus iusto expedita id ex eligendi numquam commodi.</p>
        </div>
        <div className="mb-2">
        <Img fixed={iconsImage.childImageSharp.fixed} alt="" />
          <h3>Mulheres</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus iusto expedita id ex eligendi numquam commodi.</p>
        </div>
      </div>
    </section>
  )
}

export default About