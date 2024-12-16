import React from 'react'
import Banner from '../../components/Banner/Banner'
import Brand from '../../components/Brand/Brand'
import Arrivals from '../../components/Arrivals/Arrivals'
import TopSelling from '../../components/TopSelling/TopSelling'
import DressStyle from '../../components/DressStyle/DressStyle'
import Customers from '../../components/CustomerReviews/CustomerReviews'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Brand/>
      <Arrivals/>
      <TopSelling/>
      <DressStyle/>
      <Customers/>
    </div>
  )
}

export default Home
