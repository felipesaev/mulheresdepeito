import React from "react"
import logo from '../../images/logo.svg'

import "./Nav.scss"


const Nav = () => (
 <nav>
   <div className="container">
     <div className="flex">
       <div>
          <img src={logo} alt="logo"/>
       </div>
       <ul>
         <li><a href="">Inicio</a></li>
         <li><a href="">Sobre</a></li>
         <li><a href="">Blog</a></li>
         <li><a href="">Contato</a></li>
         <li><a href="" className="btn btn-reverse">Faça Parte</a></li>
       </ul>
     </div>
   </div>
 </nav>
)

export default Nav
