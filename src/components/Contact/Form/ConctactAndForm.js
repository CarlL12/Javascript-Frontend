import React from 'react'
import Map from '../../../Assets/Map.svg'
import ContactsUs from '../../Generics/ContactsUs'
import { useState } from 'react'

const ContactAndForm = () => {

const [values, setValues] = useState({

    name: "",
    email: "",
    message: ""
})

const [errors, setErrors] = useState({

    name: "",
    email: "",
    message: ""
})


const [messageSent, setMessageSent ]= useState(false)

const nameRegex = /^[a-z ,.'-]+$/i
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const messageRegex = /(\w+\s){1,}\w+/

const inputs = [

    {
        id: 1,
        type: "text",
        name: "name",
        placeholder: "Name*",
        regex:  nameRegex,
        value: values.name,
        errormessage: "You need to fill in a name",
    },
    {
        id: 2,
        type: "email",
        name: "email",
        placeholder: "Email*",
        regex:  emailRegex,
        value: values.email,
        errormessage: "You need to fill in a correct email",
    },
    {
        id: 3,
        type: "text",
        name: "message",
        value: values.message,
        regex: messageRegex,
        errormessage: "You need to write a message",
        placeholder: "Your message*"
    },
]

function changeValues (e) {

    const {name, value} = e.target;
    setValues ({...values, [name]: value})
    setErrors ({...errors, [name]: ""})

}

async function handleSubmit(e) {

    e.preventDefault()

    const newErrors = []

    for(const input of inputs) {
        if(!input.regex.test(values[input.name])) {
            newErrors[input.name] = input.errormessage;
        }
        
    }if(Object.keys(newErrors).length === 0) {

        const valuesJSON = JSON.stringify(values)

        try {

            const response = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: valuesJSON,
            })
            
            if (response.status === 200) {

                setMessageSent(true)

                setValues({

                    name: "",
                    email: "",
                    message: ""
                })


              } else {
        
                setMessageSent(false)
              }
            } catch (error) {
        
              console.error(error)
            }
          }
          setErrors(newErrors)
}

function closeMessage() {

    setMessageSent(false)
}

  return (
        <>
            <section className="contact-form">
                    <div className="container">
                        <div className="contact">
                            <ContactsUs/>
                        </div>
                    </div>                
                    <form onSubmit={handleSubmit}>
                        <h2>Leave us a message <br/> for any information.</h2>
                        {inputs.map((input) => (   
                            <div  className="inputMap" key={input.id}>
                                <input onChange={changeValues} {...input}/>
                                {errors[input.name] && <span>{errors[input.name]}</span>}
                            </div>
                        ))}

                        <button type="submit">Send Message</button>
                        <div className={`message ${messageSent ? 'show' : 'hide'}`}>
                        
                            Message Sent!
                            <div onClick={closeMessage} className="cross"><i className="fa-solid fa-x"></i></div>
                        </div>

                    </form>

            </section>

            <img className="map" src={Map} alt="Map of stockholm"/>
    

        </>
  )
}

export default ContactAndForm