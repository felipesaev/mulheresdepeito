import React from 'react'
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './Header.scss'


const Header = () => {
  const {imageHeader} =  useStaticQuery(
    graphql`
      query {
        imageHeader: file(relativePath: { eq: "desktop.jpg"}) {
          childImageSharp {
            fixed(width:540, height:650) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
  <header>
    <div className="container">
      <div className="flex">
        <div>
        <h1>Mulheres de Peito</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates 
          rerum id atque fugiat doloribus esse libero deleniti, voluptas 
          possimus eveniet laborum. Dicta, iste? Iure esse voluptas dolorum 
          cumque! Praesentium, voluptates.</p>
          <button className="btn">
            Participe
          </button>
          </div>
          <div>
      <Img fixed={imageHeader.childImageSharp.fixed} alt="" className="ivan" />
      </div>
      </div>
     
    </div>
  </header>
  
  )}

export default Header
