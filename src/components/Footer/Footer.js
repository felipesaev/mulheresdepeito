import React from 'react'

import {  useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from 'gatsby'


import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import twitter from '../../images/icon-twitter.svg'
import youtube from '../../images/icon-pinterest.svg'

import './Footer.scss' 


const Footer = () => {

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
    <footer>
      
      <div className="container">
        <div className="flex border-bottom">
          <div>
          <Link to="#">
         <Img  fixed={logoImage.childImageSharp.fixed} alt=""/>
         </Link>
          </div>
          
            <ul className="flex">
              <li><a href="#"><img src={facebook} alt=""/></a></li>
              <li><a href="#"><img src={instagram} alt=""/></a></li>
              <li><a href="#"><img src={twitter} alt=""/></a></li>
              <li><a href="#"><img src={youtube} alt=""/></a></li>
            </ul>
        </div>
        <div className="flex align-start">
            <div>
              <h3>Mulheres</h3>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contato">Participe</a></li>
              </ul>
         

        </div>
        <div>
          <h3>Ajude-nos</h3>
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
            <li><a href="/contato">Participe</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=5512982885224&text=Fale%20conosco">WhatsApp</a></li>
          </ul>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer