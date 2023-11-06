import React from 'react'
import Header from '../components/header-showcase-section/Header/Header'
import Footer from '../components/../components/Home/Footer/Footer'
import Article_ID from '../components/Article/Article_ID'
import NewsArticles from '../components/News/NewsArticles/NewsArticles'
const Article = () => {
  return (
    <>

        <Header titel="News & Articles"/>
        <Article_ID/>
        <NewsArticles articleSize={true}/>
        <Footer/>



    </>
  )
}

export default Article