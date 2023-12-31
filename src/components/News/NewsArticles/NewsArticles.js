
import SectionTitle from '../../Generics/sectionTitle'
import { Link } from 'react-router-dom'
import './NewsArticles.css'
import Button from '../../Generics/Button'
import { useArticel } from '../../../contexts/ArticelContext'

const NewsArticles = ({articleSize}) => {

  const {articles} = useArticel()



  const formatDate = (apiDate) => {
    const date = new Date(apiDate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    return (
      <p>{day}<br/>{month}</p>
    )
  };
  

  if(articleSize) {
    return(
    <section className="container">
          <div className="section-title-news">
            <SectionTitle subtitle="Article & News "title="Our News & Articles"/>
            <Button url="/news" text="Browse Articles" type="transparent"/>
          </div>
          <div className="business-articles">
            {articles.slice(5, 8).map((article, index) => (   
              <article key={index}>
                  <Link to={`/news/${article.id}`}>
                      <div>
                        <p className="date">{formatDate(article.published)}</p> 
                        <img className="article-image " src={article.imageUrl} alt="article "/>
                      </div>
                      <p className="business">{article.category}</p>
                      <h3>{article.title}</h3>
                      <p>{article.content}</p>
                  </Link>
              </article>
            ))}

          </div>
    </section>
    )
  }
  
  return (
    <section className="container">
      <div className="section-title-news">
        <SectionTitle title="Our News & Articles"/>
      </div>
      <div className="business-articles">
        {articles.map((article, index) => (   
          <article key={index}>
              <Link to={`/news/${article.id}`}>
                  <div>
                    <p className="date">{formatDate(article.published)}</p> 
                    <img className="article-image " src={article.imageUrl} alt="article" />
                  </div>
                  <p className="business">{article.category}</p>
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
              </Link>
          </article>
        ))}

      </div>
    </section>
  )
}

export default NewsArticles