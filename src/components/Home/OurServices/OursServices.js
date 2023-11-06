import React from 'react'
import './OurServices.css'
import SectionTitle from '../../Generics/sectionTitle'
import Services from '../../Generics/Services'
import Button from '../../Generics/Button'
import BackGroundLine from '../../../Assets/background-lines-right.svg'

const OursServices = () => {
  return (
    <>
        <section className="services">

                <img className="element2" src={BackGroundLine} alt=""/>

                <div className="container ourservices">
                    <SectionTitle title="We Provide The Best Service For Consulting" subtitle="Our Services"/>
                    <div className="cards">
                        <Services url="/Business" title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                        <Services url="/Startup" title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>  
                        <Services url="/Financial" title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                        <Services url="/Risk" title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    </div>
                    <div className="btn">
                        <Button text="Browse Services" type="transparent" url="/services"/>
                    </div>
                </div>

        </section>
    
    
    
    </>
  )
}

export default OursServices