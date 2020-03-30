import React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from 'gatsby'
import "./Nav.scss"


const Nav = () => {

  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logop.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
 <nav>
   <div className="container">
     <div className="flex align-start">
       <div>
         <Link to="#">
         <Img  fixed={logoImage.childImageSharp.fixed} alt=""/>
         </Link>
       
       </div>
       <ul>
         <li><a href="#about">Inicio</a></li>
         <li><a href="">Sobre</a></li>
         <li><a href="">Blog</a></li>
         <li><a href="">Contato</a></li>
         <li><a href="" className="btn btn-reverse">Faça Parte</a></li>
       </ul>
     </div>
   </div>
 </nav>
  )}

export default Nav
