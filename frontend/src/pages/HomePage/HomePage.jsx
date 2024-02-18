import React from 'react'
import MainCarousel from '../../customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../customer/components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_watches } from '../../Data/mens_watches'

const HomePage = () => {
  return (
    <div>
      <MainCarousel className="-z-50"/>
      <div className="space-y-10 py-10 px-5 lg:px-10">
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
      </div>
    </div>

    // <div className="">
    //   <HomeCarousel images={homeCarouselData} />

    //   <div className="space-y-10 py-20">
    //   <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
    //     <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
    //     <HomeProductSection data={lengha_page1} section={"Lengha Choli"} />
    //     <HomeProductSection data={sareePage1} section={"Saree"} />
    //     <HomeProductSection data={dressPage1} section={"Dress"} />
    //     <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
    //     <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
    //     {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
    //   </div>

      
    // </div>
    
  )
}

export default HomePage