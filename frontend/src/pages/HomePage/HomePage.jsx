import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MainCarousel from '../../customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../customer/components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_watches } from '../../Data/mens_watches'

const HomePage = () => {

  //const[category,setCategory] = useState(MEN_WATCHES);
  const [cat1, setCat1]= useState([])
  const [cat2, setCat2]= useState([])


  const category1 = "MEN_WATCHES";
  const apiUrl = `http://localhost:8082/api/public/category/${category1}`;
  
  const category2 = "ANALOG_WATCHES";
  const apiUrl2 = `http://localhost:8082/api/public/category/${category2}`;

  useEffect(()=>{
    axios.get(apiUrl)
    .then(res => setCat1(res.data))
    .catch(err => console.log(err));
  },[])
  useEffect(()=>{
    axios.get(apiUrl2)
    .then(res => setCat2(res.data))
    .catch(err => console.log(err));
  },[])
   
  return (
    <div>
      <MainCarousel className="-z-50"/>
      <div className="space-y-10 py-10 px-5 lg:px-10">
        <HomeSectionCarousel data={cat1} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={cat2} sectionName={"Analog Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
        <HomeSectionCarousel data={mens_watches} sectionName={"Men's Watches"}/>
      </div>
    </div>
    
  )
}

export default HomePage