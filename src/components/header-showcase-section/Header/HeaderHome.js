import React from 'react'
import '../Header/HeaderHome.css'
import Button from '../../Generics/Button'
import Logo from '../../../Assets/logotype.svg'
import { NavLink} from 'react-router-dom'
import { useState } from 'react'


const Header = () => {

const [menuOpen, setMenuOpen] = useState(false)


  return (
    
<>

<div className="wrapper">
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
                    <a href="https://twitter.com/home" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.facebook.com/"rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://se.linkedin.com/"rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a>

                </div>
            </div>
            <div className="menu">
                <div className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Services">Services</NavLink>
                    <NavLink to="/News">News</NavLink>
                    <NavLink to="/Contacts">Contacts</NavLink>

                </div>
                <Button url="/Login" text="Login" type="yellow" />

            </div>
        </div>




    </header>
</div>
</>       
    
    

  )
}

export default Header