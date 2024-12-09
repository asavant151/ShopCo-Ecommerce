import React from 'react'
import Banner from '../../components/Banner/Banner'
import Brand from '../../components/Brand/Brand'
import Arrivals from '../../components/Arrivals/Arrivals'
import TopSelling from '../../components/TopSelling/TopSelling'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Brand/>
      <Arrivals/>
      <TopSelling/>
    </div>
  )
}

export default Home
