import React from 'react'
import WebinarComp from '../../components/LandingPage/Webinar/WebinarComp'
import HeroComp from "../../components/LandingPage/Hero/HeroComp"
import CompCard from '../../components/LandingPage/Competition/CompCard'
import CompetitionComp from '../../components/LandingPage/Competition/CompetitionComp'
import Gap from '../../components/LandingPage/Hero/Gap'

const index = () => {
  return (
    <div>
        <HeroComp />
        <CompetitionComp />
        <WebinarComp />
    </div>
  )
}

export default index