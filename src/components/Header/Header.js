import React from 'react'
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './Header.scss'


const Header = () => {
  const {imageHeader} =  useStaticQuery(
    graphql`
      query {
        imageHeader: file(relativePath: { eq: "mulheres.jpg"}) {
          childImageSharp {
            fixed(width:580, height:650) {
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
      <div className="flex align-start">
        <div>
        <h1 className="line-top">Mulheres de Peito</h1>
        <p>O projeto "Mulheres de peito" surgiu após minha grande amiga Aline 
          Bertholdo Tavolaro ser diagnosticada com cancer de mama, 
          o momento do encontro com as amigas , a maquiagem e sorrisos, 
          foram fundamentais para trazer alegria e ainda ajuda-la no tratamento
          , hoje ela brilha no céu.</p>
          <button className="btn">
            Participe
          </button>
          </div>
          <div className="ivan">
      <Img fixed={imageHeader.childImageSharp.fixed} alt="" className="ivan" />
      </div>
      </div>
     
    </div>
  </header>
  
  )}

export default Header
