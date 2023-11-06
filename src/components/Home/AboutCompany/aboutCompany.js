import React from 'react'
import './aboutCompany.css'
import SectionTitle from '../../Generics/sectionTitle'
import '../../../App.css'
import Woman from '../../../Assets/Woman.svg'
import Quotes from '../../../Assets/Quotes.svg'
import Button from '../../Generics/Button'

const aboutCompany = () => {
  return (
    <>
        <section className="about">

            <div className="container">

                
                <img className ="tablet" src={Woman} alt="Woman with tablet"/>

                <img className ="founder" src={Quotes} alt="Founder"/>
                

                <div className="company">
                    <SectionTitle title="We Are Business Consulting & Credit Repair Experts" subtitle="About Company"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. 

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
                    </p>

                    <div className="buttons">
                        <Button type="yellow" text="Learn More" url="/LearnMore"/> 
                                              
                        <a className="intro" href="intro.html"><i className="fa-thin fa-circle-play"></i>Intro Video</a>

                    </div>
                </div>
            </div>


        </section>
     
    </>
  )
}

export default aboutCompany