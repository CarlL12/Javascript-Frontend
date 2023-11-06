import React from 'react'
import '../App.css'
import HeaderShowCase from '../components/header-showcase-section/HeaderShowCase'
import Logos from '../components/Home/Logos/Logos'
import Features from '../components/Home/Features/Features'
import AboutCompany from '../components/Home/AboutCompany/aboutCompany'
import OursServices from '../components/Home/OurServices/OursServices'
import ChooseUs from '../components/Home/ChooseUs/ChooseUs'
import Project from '../components/Home/Project/Project'
import OurTeam from '../components/Home/OurTeam/OurTeam'
import NewsUpdates from '../components/Home/NewsUpdates/NewsUpdates'
import Footer from '../components/Home/Footer/Footer'
import NewsArticles from '../components/News/NewsArticles/NewsArticles'




const Home = () => {
  return (
    <>
      <HeaderShowCase/>
      <Logos/>
      <Features/>
      <AboutCompany/>
      <OursServices/>
      <ChooseUs/>
      <Project/>
      <OurTeam/>
      <NewsArticles articleSize={true}/>
      <NewsUpdates/>
      <Footer/>
      
    </>
  )
}

export default Home