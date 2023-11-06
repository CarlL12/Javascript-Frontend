import React from 'react'
import './ShowCase.css'
import Hero from '../../../Assets/showcase-image.svg'
import Button from '../../Generics/Button'

const ShowCase = () => {
  return (
    <>
        <main className="container main">

            <div className="container">

                <div className="content">

                    
                    <h1> We provide The Best business solutions  </h1>
                    <p>  Establish your vision and value proposition and turn them into testable </p>
                    <div> 
                        <Button type="yellow" text="Get Consulting" url="/consulting"/>
                        <Button type="transparent" text="Learn More" url="/learnMore"/> 
                        
                    </div>
                </div>
        
                <img src={Hero} alt="Man with tablet" />

        


            </div>


        </main>
    </>
 
  )
}

export default ShowCase