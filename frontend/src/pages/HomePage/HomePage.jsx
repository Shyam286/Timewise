import React from 'react'
import MainCarousel from '../../customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../customer/components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_watches } from '../../Data/mens_watches'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-10 px-5 lg:px-10">
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
      </div>
    </div>
  )
}

export default HomePage