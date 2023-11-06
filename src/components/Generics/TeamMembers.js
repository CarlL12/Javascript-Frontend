import React from 'react'
import teamMemberOne from '../../Assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import teamMemberTwo from '../../Assets/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import teamMemberThree from '../../Assets/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import teamMemberFour from '../../Assets/team-member-4.png'

const TeamMembers = () => {

    const teamMembers = [

        {img: teamMemberOne, alt:"business woman smiling", title:"Kristine Palmer", text:"Chef Operation Officer"},
        {img: teamMemberTwo, alt:"business man smiling", title:"Mark Aubri", text:"Senior Consultant"},
        {img: teamMemberThree, alt:"business woman smiling", title:"Kimberly Hansen", text:"Senior Consultant"},
        {img: teamMemberFour, alt:"business man smiling", title:"Justin Willoman", text:"Senior Tech Consultant"},
    ]
  return (
    <>

        {teamMembers.map((teamMember, index) => (
            <article key={index}>
                <img src={teamMember.img} alt={teamMember.alt} />
                <h2>{teamMember.title}</h2>
                <p>{teamMember.text}</p>
            </article>

        ))}
    
    
    </>
  )
}

export default TeamMembers