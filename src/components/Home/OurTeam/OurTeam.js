import React from 'react'
import './OurTeam.css'
import SectionTitle from '../../Generics/sectionTitle'
import Button from '../../Generics/Button'
import TeamMembers from '../../Generics/TeamMembers'
import Dot from '../../../Assets/dot.png'
import ClientReviews from '../../Generics/ClientReviews'


const OurTeam = () => {
  return (
    <>
    <section className="meet-our-team">
        
        <div className="container team-container">
            <div className="section-title">
                <SectionTitle title="Experience Team Members" subtitle="Meet Our team"/>
                <div className="btn">
                    <Button url="/team" text="Browse Team" type="black"/>
                </div>
            </div>
            <div className="team-members">
                <TeamMembers/>
            </div>
            <div className="dots">
                <img src={Dot} alt="dots" />        
            </div>
        </div>

        <div className="background-testimonial">
            <div className="container testimonial">

                <SectionTitle title="What Our Client Says"subtitle="Testimonial"/>

                <div className="client-reviews">

                    <ClientReviews/>

                </div>
                <div className="btn">
                    <Button url="/reviews" type="black" text="All Reviews"/>

                </div>
            </div>        
        </div>


       

    </section>
    
    
    
    
    </>
  )
}

export default OurTeam