import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks = () => {

    const FooterLinks = [

        {titel: "Company", UrlOne:"/about", linkone:"About",UrlTwo:"/features", linktwo:"Features", UrlThree:"/works",linkthree:"Works",linkfour:"Career", UrlFour:"/career" },
        {titel: "Help",UrlOne:"/support", linkone:"Customer Support",linktwo:"Delivery Details",UrlTwo:"/delivery",linkthree:"Terms & Conditions",UrlThree:"/terms",linkfour:"Privacy Policy",UrlFour:"/policy",},
        {titel: "Resources", linkone:"Free eBooks",UrlOne:"/ebook",linktwo:"Development Tutorial",UrlTwo:"/tutorial",linkthree:"How to - Blog",UrlThree:"/blog",linkfour:"Youtube Playlist", UrlFour:"https://www.youtube.com/",},
        {titel: "Link", linkone:"Free eBooks",UrlOne:"/ebook",linktwo:"Development Tutorial", UrlTwo:"/tutorial",linkthree:"How to - Blog",UrlThree:"/blog",linkfour:"Youtube Playlist",UrlFour: "https://www.youtube.com/",}
    ]
  return (
    <>

        {FooterLinks.map((footerlink, index) => (

                <div  key={index}>
                    <h3>{footerlink.titel}</h3>
                    <Link to={footerlink.UrlOne}>{footerlink.linkone}</Link>
                    <Link to={footerlink.UrlTwo}>{footerlink.linktwo}</Link>
                    <Link to={footerlink.UrlThree}>{footerlink.linkthree}</Link>
                    <Link to={footerlink.UrlFour}>{footerlink.linkfour}</Link>

                </div>

        ))}
    
    
    
    
    
    </>
  )
}

export default FooterLinks