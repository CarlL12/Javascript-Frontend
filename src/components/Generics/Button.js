import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({url, text, type}) => {

  function getButtonClassName() {

    switch (type) {
      
      case 'yellow' :
        return 'btn-yellow'
      
      case 'transparent':
        return 'btn-transparent'

      case 'black':
        return 'btn-black'
      default :

        return 'btn-yellow'
        
    }
  }




  return (
    <>
    <Link className={getButtonClassName()} to={url}>{text} <i className="fa-solid fa-arrow-up-right"></i></Link>
    
    
    
    </>
  )
}

export default Button