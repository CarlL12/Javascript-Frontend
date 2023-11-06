import React from 'react'
import './ChooseUs.css'
import SectionTitle from '../../Generics/sectionTitle'
import ChooseUsBox from '../../Generics/ChooseUsBox'
import BG from '../../../Assets/BG.svg'
import TwoWoman from '../../../Assets/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const ChooseUs = () => {
  return (
    <>
          <section className="choose-us">

              <img className="bg" src={BG} alt="background color"/>
              <img className="twowomen" src={TwoWoman} alt="two women with tablet"/>


              <div className="container sectionfive">
                  <div className="why">

                          <SectionTitle title="Why We Are The Best Business Consulting Agency" subtitle="Why Choose Us"/>

                      <div className="buttons">

                          <ChooseUsBox title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur" icon="fa-light fa-thumbs-up"/>
                          <ChooseUsBox title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur" icon="fa-regular fa-clipboard-list-check"/>
                          <ChooseUsBox title="Experience Design " text="Lorem, ipsum dolor sit amet consectetur" icon="fa-regular fa-head-side-gear"/>
                          <ChooseUsBox title="Artificial Inteligence " text="Lorem, ipsum dolor sit amet consectetur" icon="fa-light fa-microchip-ai"/>
                
                      </div>

                  </div>     
                  
              </div>




          </section>
    </>
  )
}

export default ChooseUs