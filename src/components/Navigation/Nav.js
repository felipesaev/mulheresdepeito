import React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from 'gatsby'

import close from '../../images/icon-close.svg' 
import iconHamburger from '../../images/icon-hamburger.svg'
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
//   const hamburger = document.getElementById('hamburger');
//   const menu = document.getElementById('menu');

//   hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('show');
// 	menu.classList.toggle('show');
// });
  return (
 <nav>
   <div className="container">
     <div className="flex align-start">
       <div>
         <Link to="#">
         <Img  fixed={logoImage.childImageSharp.fixed} alt=""/>
         </Link>

         <button class="hamburger" id="hamburger">
						<img class="open"  src={iconHamburger} alt="icon-hamburger"/>
						<img class="close" src={close} alt="icon-close" />
					</button>
       
       </div>
       <ul id="menu">
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
