import React from 'react'
import './HeaderShowCase.css'
import ShowCase from '../header-showcase-section/ShowCase/ShowCase'
import Header from './Header/HeaderHome'

import backgroundLines from '../../Assets/background-lines.svg'

const headerShowCase = () => {
  return (
    <>
        <div className="wrapper">

        <img class="background-lines" src={backgroundLines} alt=""/>
            <Header/>
            <ShowCase/>



        </div>
 
    </>
  )
}

export default headerShowCase