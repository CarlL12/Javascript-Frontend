import React from 'react'
import ReviewImgOne from '../../Assets/review-picture-1.png'
import ReviewImgTwo from '../../Assets/review-picture-2.png'
import ReviewImgThree from '../../Assets/review-picture-3.png'
import Star from '../../Assets/Star.svg'

const ClientReviews = () => {


    const clientReviews = [

        {img: ReviewImgOne, title:"Cassandra Warren", text:"Business Manager, Dorfus", alt:"woman with dark hair" },
        {img: ReviewImgTwo, title:"Amanda Tulling", text:"Senior Developer, Square",alt:"Asian Woman" },
        {img: ReviewImgThree, title:"Jack McDogglas", text:"Key Account Manager, Gobona",alt:"Man smiling" },
    ]
  return (
    <>

        {clientReviews.map((clientReview, index) => (

            <article key={index}>
                <img src={Star} alt="stars" />
                <p className="lorem-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="review-names">
                    <img src={clientReview.img} alt={clientReview.alt} />                           
                    <div className="text">
                            <h3>{clientReview.title}</h3>
                            <p>{clientReview.text}</p>
                    </div>
                                
                </div>
            </article>

        ))}
    
    
    
    
    </>
  )
}

export default ClientReviews