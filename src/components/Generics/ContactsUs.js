import React from 'react'
import '../Contact/Form/ConctactAndForm.css'

const ContactsUs = () => {

    const contactBoxes = [

        {icon: "fa-sharp fa-solid fa-location-dot", titel: "Visit Us", text:"Sveavägen 31 111 34 STOCKHOLM"},
        {icon: "fa-solid fa-phone", titel: "Call us", text:"+46 (8) 121 470 50 +46 (8) 121 470 51"},
        {icon: "fa-solid fa-envelope", titel: "Email us", text:"info@crito.com support@crito.com"},

    ]


  return (
    <>
    
        {contactBoxes.map((contactBox) => (

            <article>

                <i className={contactBox.icon}></i>
                <div className="text">
                    <h3>{contactBox.titel}</h3>
                    <p>{contactBox.text}</p>                     
                </div>

            </article>

        )  )}
    
    </>
  )
}

export default ContactsUs