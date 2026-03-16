import React from 'react'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
   <>
   <Header />
   <Routes>
<Route path='/' element={<Home />} />


    </Routes>

   </>
  )
}

export default App