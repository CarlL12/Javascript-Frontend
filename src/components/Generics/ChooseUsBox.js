import React from 'react'

const ChooseUsBox = ({title, text, icon}) => {
  return (
    <>
    
    <div className="ChooseUsBox">

        <div className="ChooseUsBoxIcon">   
            <i className={icon}></i> 
        
        </div>
        <div className="ChooseUsBoxText"> 

            <h1>{title}</h1>
            <p>{text}</p>   
        
        </div>


    </div>

    
    </>
  )
}

export default ChooseUsBox