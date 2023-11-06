import React from 'react'
import article1 from '../../Assets/adeolu-eletu-E7RLgUjjazc-unsplash.jpg';  
import article2 from '../../Assets/marek-levak-zANXcXyByos-unsplash.jpg';
import article3 from '../../Assets/oli-dale-xjSkI_seiZY-unsplash.jpg';
import article4 from '../../Assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg';

const Projects = () => {

    const articles = [

        {img: article1, title: "Grow your business", alt:"A mans hands reading a business paper"},
        {img: article2, title: "Why your client needs a responsive website", alt:"Note book with coffe cup"},
        {img: article3, title: "Educate your employees to get better results", alt:"Glasses with pen,watch and phone"},
        {img: article4, title: "Business Insights is a important piece of your business", alt:"Laptop showing numbers"},

    ]



  return (
    <>

        {articles.map((article, index) => (

            <article key={index}>
                <img src={article.img} alt={article.alt} />
                <h3>{article.title}</h3>
                <a href="readmore.html">Read More<i className="fa-solid fa-arrow-up-right"></i></a>
            </article>
             

        ))}

    
    
    </>
  )
}

export default Projects