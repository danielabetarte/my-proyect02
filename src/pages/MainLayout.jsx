import { Outlet } from 'react-router-dom'

import Header from '../componets/Header'
import Footer from '../componets/footer'

import React from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout