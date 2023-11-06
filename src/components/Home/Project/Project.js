import React from 'react'
import './Project.css'
import SectionTitle from '../../Generics/sectionTitle'
import Button from '../../Generics/Button'
import Projects from '../../Generics/Projects'

const Project = () => {
  return (
    <>
    
    <section className="project-and-case">

        <div className="container">

                <SectionTitle title="Let’s Looks Our Global Projects" subtitle="Project & Case Studies"/>

            <div className="project-and-cases">

                <Projects/>


            </div>
            <div className="button">

                <Button url="/projects" type="black" text="All Recent Projects"/>

            </div>
            


        </div>

    </section>
    
    
    
    
    </>
  )
}

export default Project