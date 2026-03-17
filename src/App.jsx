import React from 'react'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Header/Footer'
import FloatingButton from './Header/FloatingButton'
import Accessories from './Accessories/Accessories'
import LGHeroSection from './Accessories/Hero'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
   <>
   <ScrollToTop />
   <Header />
   <Routes>
<Route path='/' element={<Home />} />
<Route path='/accessories/' element={<LGHeroSection />} />


    </Routes>
    <Footer />
    <FloatingButton />

   </>
  )
}

export default App