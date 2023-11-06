import React from 'react'
import Header from '../components/header-showcase-section/Header/Header'
import NewsArticles from '../components/News/NewsArticles/NewsArticles'
import NewsUpdates from '../components/Home/NewsUpdates/NewsUpdates'
import Footer from '../components/Home/Footer/Footer'

const News = () => {
  return (
    <>
    
        <Header titel="News & Articles"/>
        <NewsArticles articleSize={false}/>
        <NewsUpdates/>
        <Footer/>
    
    
    </>
  )
}

export default News