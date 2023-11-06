import React from 'react'
import '../Header/header.css'
import Button from '../../Generics/Button'
import Logo from '../../../Assets/logotype.svg'
import { NavLink, Link} from 'react-router-dom'
import BackGroundLine from '../../../Assets/background-lines.svg'
import { useState } from 'react'


const Header = ({titel}) => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    
<>

<section className="firstpage-contact">

<img className="background-lines" src={BackGroundLine} alt="" />

<header className="container header">

        {menuOpen ? (
                    <div className="mobile-menu">        
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Services">Services</NavLink>
                    <NavLink to="/News">News</NavLink>
                    <NavLink to="/Contacts">Contacts</NavLink>
            </div>
        ):
        <></>
        }   

    <div className="logo">

        <img src={Logo} alt="logo" />
    </div>
    
    
    <div className="mobile-button">
            <button onClick={() => setMenuOpen(!menuOpen)}href="login.html"><i className="fa-solid fa-list"></i></button>

        </div>


    <div className="topmeny">
            <div className="contact">
                <div className="phone">
                    <div><i className="fa-solid fa-phone-volume"></i> +46 (8) 121 470 50</div>
                    <div><i className="fa-regular fa-envelope"></i>info@crito.com</div>
                    <div><i className="fa-solid fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
                </div>
                <div className="socialmedia">
                    <a href="https://twitter.com/home" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.facebook.com/"target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://se.linkedin.com/"target="_blank"><i className="fa-brands fa-linkedin"></i></a>

                </div>
            </div>
            <div className="menu">
                <div className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>

                </div>
                <Button url="/Login" text="Login" type="yellow" />

            </div>
        </div>


</header>

<div className="container section-title">
    <div>
        <Link to="/">Home </Link>
        <Link to="/contacts">Contact</Link>
    </div>

    <h2>{titel}</h2>


</div>





</section>
</>       
    
    

  )
}

export default Header