import React from 'react'
import Paperz from '../../../Assets/paperz.svg'
import Dorfus from '../../../Assets/dorfus.svg'
import Martino from '../../../Assets/martino.svg'
import Square from '../../../Assets/square.svg'
import Gobona from '../../../Assets/gobona.svg'
import './Logos.css'


const Logos = () => {
  return (
    <div className="logos">
        <div className="container">

            <img src={Paperz} alt="Logo Paperz"/>
            <img src={Dorfus} alt="Logo Dorfus"/>
            <img src={Martino}  alt="Logo Martino"/>
            <img src={Square} alt="Logo Square"/>
            <img src={Gobona} alt="Logo Gobona"/>      


        </div>
    
    </div>
  )
}

export default Logos