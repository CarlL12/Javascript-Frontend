import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      try {
        const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles");
        if (!result.ok) {
          throw new Error('Could not load articles');
        }
        const articleData = await result.json();
        setArticles(articleData);
      } catch (error) {
        console.error('There was a problem with getting data', error);
      }
    }

    getArticles();
  }, []); 


  return (
    <>
        
        {articles.slice(5, 8).map((article, index) => (

            <article key={index}>

              <Link to={`/news/${article.id}`}>
                    <img className="article-image"  src={article.imageUrl} alt="" />
                    <p className="business">Business</p>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
              </Link>
            </article>
        ))}
    </>
  );
};

export default Articles;