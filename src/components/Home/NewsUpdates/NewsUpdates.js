import React from 'react'
import './NewsUpdates.css'
import BackGroundImage from '../../../Assets/background-wavy-lines.svg'

const NewsUpdates = () => {
  return (
    <>
        <section className="news-updates">

                <img className="element3" src={BackGroundImage} alt="" />

                <div className="container">

                    <h2>Get News Updates By Signup</h2>
                                                  
                        <form className="btn-mail-subscribe">
                            <input type="email" placeholder="username@domain.com"></input>
                            <button type="submit" className="btn-yellow"> Subscribe</button>
                        </form>
                    
                </div>
        </section>
    
    
    </>
  )
}

export default NewsUpdates