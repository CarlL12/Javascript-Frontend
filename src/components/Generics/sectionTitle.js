import React from 'react'
import '../../App.css'



const sectionTitle = ({title, subtitle}) => {
  return (
    <>
        <div className="sectionTitle">

                <div>{subtitle}</div>
                <h1>{title}</h1>
    
        </div> 
    
    
    
    </>
  )
}

export default sectionTitle