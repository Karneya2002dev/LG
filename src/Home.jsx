import React from 'react'
import LgLandingPage from './Header/LgLandingPage'
import PickUpForYou from './Header/PickUpForYou'
import MonthPicker from './Header/MonthPicker'
import LgStore from './Header/LgStore'
import LgUI from './Header/LgUI'
import Highlights from './Header/Highlights'

const Home = () => {
  return (
  <>
  <LgLandingPage />
  <PickUpForYou />
  <MonthPicker />
  <LgStore />
  <LgUI />
 <Highlights />
  
  </>
  )
}

export default Home