import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Dasboard from '../components/pages/Dasboard'
import Package from '../components/pages/Package'
import User from '../components/pages/User'
import Blog from '../components/pages/Blog'

const Routers = () => {
  return (
     <>
      <Routes>
        <Route  path='/' element={ <Navigate to='/dasboard' />}/>
        <Route  path='/dasboard' element={ <Dasboard  />}/>
        <Route  path='/package' element={ <Package  />}/>
        <Route  path='/blog' element={ <Blog  />}/>
        <Route  path='/user' element={ <User />}/>
      </Routes>
     </>
  )
}

export default Routers
