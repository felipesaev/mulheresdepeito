import React from 'react'
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  
  const {iconsImage} =  useStaticQuery(
    graphql`
      query {
        iconsImage: file(relativePath: { eq: "gatsby-icon.png"}) {
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
    <section className="container">
      <h2>Mulhres de peito</h2>
      <div className="flex">
        <div>
        <Img fixed={iconsImage.childImageSharp.fixed} alt="" />
          <h4>Mulheres</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus iusto expedita id ex eligendi numquam commodi.</p>
        </div>
        <div>
        <Img fixed={iconsImage.childImageSharp.fixed} alt="" />
          <h4>Mulheres</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus iusto expedita id ex eligendi numquam commodi.</p>
        </div>
        <div>
        <Img fixed={iconsImage.childImageSharp.fixed} alt="" />
          <h4>Mulheres</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus iusto expedita id ex eligendi numquam commodi.</p>
        </div>
      </div>
    </section>
  )
}

export default About