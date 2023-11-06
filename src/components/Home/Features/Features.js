import React from 'react'
import './Features.css'
import SectionTitle from '../../Generics/sectionTitle'
import Advice from '../../Generics/Advice'
import Button from '../../Generics/Button'





const Features = () => {

  const services = [

    {icon:"fa-light fa-handshake", title:"Business Advice", description:"Lorem ipsum, dolor sit ametconsectetur adipisicing elit."},
    {icon:"fa-thin fa-chart-mixed", title:"Financial Advice", description:"Lorem ipsum, dolor sit ametconsectetur adipisicing elit."},
    {icon:"fa-sharp fa-regular fa-lightbulb-exclamation-on", title:"Startup Business", description:"Lorem ipsum, dolor sit ametconsectetur adipisicing elit."},
    {icon:"fa-regular fa-gear", title:"Risk Management", description:"Lorem ipsum, dolor sit ametconsectetur adipisicing elit."}
  ]



  return (
    <>
       <section className="features">

                <div className="container">
                    <div className="section-title">
                        <SectionTitle title="Our Accounting is trusted by thousand of companies" subtitle="Features" type="sectionTitle"/>
                         <p>
                         <Button type="yellow" text="Learn More" url="/LearnMore"/> 
                
                        </p>
                    </div>

                    <div className="features-advice">

                      {services.map((service, index) =>(
                        <Advice key={index} title={service.title} icon={service.icon} description={service.description}/>

                      ))}

                      

                    </div>
                    <p class="btn-770">
                    
                    <Button type="yellow" text="Learn More" url="/LearnMore"/> 
                    </p>  
                    
                </div>
                
        </section>
    </>
  )
}

export default Features