import React, { useEffect, useState } from 'react'
import SectionTitle from '../Generics/sectionTitle'
import './Article_ID.css'
import image from '../../Assets/Woman.svg'
import cite from '../../Assets/Shape.png'
import { Link, useParams } from 'react-router-dom'

const Article_ID = () => {

    const params = useParams()
    const id = params.id
    const [article, setArticle] = useState([])


    useEffect(() => {
    async function getArticle() {
        try {
            const data = await fetch (`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            if(data.ok) {
                const articleData = await data.json()
                setArticle(articleData)
            }
        }
        catch(error) {
            console.log('Error getting data')
        }
    }

    getArticle()
    }, [id])



    function convertDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const parsedDate = new Date(article.published);
        const formattedDate = parsedDate.toLocaleDateString('en-US', options);
    
        return formattedDate;
    }



  return (
    <div className="container">
        
        <div className="title">
            <SectionTitle title={article.title}/>
        </div>
        
        <div className="infobox">

            
            <p>{convertDate()}</p>
            <p><i class="fa-solid fa-circle"></i>{article.category}</p>
            <p><i class="fa-solid fa-circle"></i>{article.author}</p>

        </div>

        <div className="flex">

            <div className="articleContent" key={article.id}>

                <img className="articleImage"src={article.imageUrl} alt="article image"/>

                <p>{article.content}</p>

                <div className="quotes">
                    <img className="cite "src={cite} alt="cites"/>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>

                <div className="categories">


                    <Link to="">Digitalization</Link>
                    <Link>School</Link>
                    <Link>IT</Link>
                    <Link>Design</Link>
                    <Link>Work</Link>
                    <Link>Tech</Link>

                </div>


            </div>

            <div className="inputPostsCategories">

                <div className="inputField">

                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Type to search...'/>

                </div>

                <div className="posts">

                    <h3>Recent Posts</h3>

                    <Link to="/">
                        <h4>How To Blow Through Capital At An Incredible Rate</h4>
                        <p>Jan 14, 2020</p>
                    </Link>

                    <Link to="/">
                        <h4>Design Studios That Everyone Should Know About?</h4>
                        <p>Jan 14, 2020</p>
                    </Link>

                    <Link to="/">
                        <h4>How did we get 1M+ visitors in 30 days without anything!</h4>
                        <p>Jan 14, 2020</p>
                    </Link>

                    <Link to="/">
                        <h4>Figma On Figma: How We Built Our Website Design System</h4>
                        <p className="noBorder">Jan 14, 2020</p>
                    </Link>
                </div>

                <div className="categories">
                    <h3>Categories</h3>
                    <Link to="">
                        <h6>Technology </h6>
                        <p>-</p>
                        <p> 20 Posts</p>
                    </Link>

                    <Link to="">
                        <h6>Freelancing </h6>
                        <p>-</p>
                        <p> 07 Posts</p>
                    </Link>

                    <Link to="">
                        <h6>Writing </h6>
                        <p>-</p>
                        <p>16 Posts</p>
                    </Link>

                    <Link to="">
                        <h6>Marketing</h6>
                        <p>-</p>
                        <p> 11 Posts</p>
                    </Link>

                    <Link to="">
                        <h6>Business </h6>
                        <p>-</p>
                        <p> 35 Posts</p>
                    </Link>

                    <Link to="">
                        <h6>Education </h6>
                        <p>-</p>
                        <p> 14 Posts</p>
                    </Link>



                </div>
                
                

            </div>
    
        </div>
    
    
    </div>
  )
}

export default Article_ID