import React from 'react'
import Line2 from '../../Assets/Line 2.svg'
import { Link } from 'react-router-dom'

const Services = ({title, text, url}) => {
  return (
    <>
    
    <Link to={url}>

        <img src={Line2} alt="Line"/>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button"><i className="fa-solid fa-arrow-right"></i></div>

    </Link>
    
    
    
    
    </>
  )
}

export default Services