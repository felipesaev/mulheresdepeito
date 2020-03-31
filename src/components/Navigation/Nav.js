import React from "react"
import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from 'gatsby'

import close from '../../images/icon-close.svg' 
import iconHamburger from '../../images/icon-hamburger.svg'
import "./Nav.scss"


const Nav = () => {

  
  

  const handleClickMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
    console.log(menu);

  }

  const handleClick = () =>{
    const hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('show');
     
    console.log(hamburger);
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {showModal: false};
  //   this.handleClick = this.handleClick.bind(this);
  // }

  //   const hamburger = document.getElementById('hamburger');
//   const menu = document.getElementById('menu');

//   hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('show');
// 	menu.classList.toggle('show');
// });


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
       
         <Link to="#">
            <Img  fixed={logoImage.childImageSharp.fixed} alt=""/>
         </Link>
     
         <button className="hamburger" onClick={handleClick}  id="hamburger">
						<img className="open" onClick={handleClickMenu}  src={iconHamburger} alt="icon-hamburger"/>
						<img className="close" onClick={handleClickMenu} src={close} alt="icon-close" />
          </button>
       
       
       <ul id="menu" >
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
