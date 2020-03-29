import React from 'react'
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import twitter from '../../images/icon-twitter.svg'
import youtube from '../../images/icon-pinterest.svg'

import logo from '../../images/logo.svg'


const Footer = () => {
  return (
    <footer>
      
      <div className="container">
        <div className="flex">
          <div>
            <img src={logo} alt="logo"/>
          </div>
          
            <ul>
              <li><a href="#"><img src={facebook} alt=""/></a></li>
              <li><a href="#"><img src={instagram} alt=""/></a></li>
              <li><a href="#"><img src={twitter} alt=""/></a></li>
              <li><a href="#"><img src={youtube} alt=""/></a></li>
           
              
            </ul>
        </div>
        <div className="flex">
            <div>
              <h3>Mulheres</h3>
              <ul>
                <li><a href="">sobre</a></li>
                <li><a href="">sobre</a></li>
                <li><a href="">sobre</a></li>
                <li><a href="">sobre</a></li>
              </ul>
            </div>

        </div>
        <div>
          <h3>Ajude-me</h3>
          <ul>
              <li><a href="">FAQ</a></li>
              <li><a href="">Termos de uso</a></li>
              <li><a href="">Politica de Privacidade</a></li>
              <li><a href="">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li><a href="">Suporte</a></li>
            <li><a href="">WhatsApp</a></li>
          </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer