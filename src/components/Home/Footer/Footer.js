import React from 'react'
import './Footer.css'
import FooterLinks from '../../Generics/FooterLinks'
import AllRightsReserved from './AllRightsReserved'
import LogoWhite from '../../../Assets/logotype-white.svg'
import BackGroundLine from '../../../Assets/background-lines-white-right.svg'

const Footer = () => {
  return (
    <>
            <footer>

                <img className="Element4" src={BackGroundLine} alt="" />

                <div className="container">
                    <div className="logo-and-text">
                        <img src={LogoWhite} alt="Logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>

                    <div className="links">
                        <FooterLinks/>

                    </div>
                </div>
            </footer>

            <AllRightsReserved/>
    
    
    
    
    </>
  )
}

export default Footer