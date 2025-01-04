import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/footer'

const mainlayout = () => {
  return (<>
  
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default mainlayout