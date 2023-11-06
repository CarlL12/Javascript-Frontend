import React from 'react'

const Advice = ({icon, title, description}) => {

    
  return (
    <>
    
    <div className="Advice">

        <i className={icon}></i>
        <h2> {title}</h2>  
        <p>{description}</p> 
    </div>
    
    
    
    
    </>
  )
}

export default Advice